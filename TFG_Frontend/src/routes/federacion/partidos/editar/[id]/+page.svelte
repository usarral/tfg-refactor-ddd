<script>
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();
  const handleOnSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = [];
    for (let field of formData) {
      const [key, value] = field;
      data.push({ key, value });
    }
    const dataObject = data.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
    const res = sendForm(dataObject).then((res) =>
      res.message === "Partido actualizado"
        ? (window.location.href = "/federacion/partidos")
        : alert("Error al actualizar el partido")
    );
  };

  const sendForm = async (data) => {
    const id = window.location.href.split("/").pop();
    const response = await fetch(
      `http://${window.location.hostname}:3000/partido/` + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    return res;
  };
  onMount(async () => {
    const getCategorias = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/categoria`
      );

      const res = await response.json();
      const categorias = res.data;
      const select = document.getElementById("categoria");
      categorias.forEach((categoria) => {
        const option = document.createElement("option");
        option.value = categoria.id;
        option.text = categoria.nombre;
        select.appendChild(option);
      });
    };
    const getEquipos = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/equipo`
      );

      const res = await response.json();
      const equipos = res.data;
      const selectLocal = document.getElementById("equipoLocal");
      const selectVisitante = document.getElementById("equipoVisitante");

      equipos.forEach((equipo) => {
        const option = document.createElement("option");
        option.value = equipo.id;
        option.text = equipo.nombre;
        selectLocal.appendChild(option);
        selectVisitante.appendChild(option.cloneNode(true));
      });
    };
    const equiposSelector = async () => {
      // Obtenemos los elementos seleccionados en el select de equipos
      const selectLocal = document.getElementById("equipoLocal");
      const selectVisitante = document.getElementById("equipoVisitante");

      // Si se selecciona un equipo en el select de equipo local se deshabilita la opción en el select de equipo visitante, y viceversa

      selectLocal.addEventListener("change", (e) => {
        const selected = e.target.value;
        const options = selectVisitante.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === selected) {
            options[i].disabled = true;
            // si esta opción está seleccionada, la deseleccionamos y ponemos el valor a 0
            if (options[i].selected) {
              options[i].selected = false;
              selectVisitante.value = 0;
            }
          } else {
            options[i].disabled = false;
          }
        }
      });

      selectVisitante.addEventListener("change", (e) => {
        const selected = e.target.value;
        const options = selectLocal.options;
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === selected) {
            options[i].disabled = true;
            // si esta opción está seleccionada, la deseleccionamos y ponemos el valor a 0
            if (options[i].selected) {
              options[i].selected = false;
              selectLocal.value = 0;
            }
          } else {
            options[i].disabled = false;
          }
        }
      });
    };
    const getPabellones = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/pabellon`
      );

      const res = await response.json();
      const pabellones = res.data;
      const select = document.getElementById("pabellon");
      pabellones.forEach((pabellon) => {
        const option = document.createElement("option");
        option.value = pabellon.id;
        option.text = pabellon.nombre;
        select.appendChild(option);
      });
    };
    const getArbitros = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/arbitro`
      );

      const res = await response.json();
      const arbitros = res.data;
      const select = document.getElementById("arbitro");
      arbitros.forEach((arbitro) => {
        const option = document.createElement("option");
        option.value = arbitro.id;
        option.text =
          arbitro.nombre + " " + arbitro.apellido + " (" + arbitro.DNI + ")";
        select.appendChild(option);
      });
    };
    const id = window.location.href.split("/").pop();
    const getData = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/partido/${id}`
      );
      const res = await response.json();

      return res.data;
    };
    const printDataToForm = (data) => {
      console.log(data);
      const $ = (selector) => document.querySelector(selector);
      $("#arbitro").value = data.arbitro;
      $("#fecha").value = new Date(data.fecha).toISOString().slice(0, -8);
      $("#categoria").value = data.categoria;
      $("#pabellon").value = data.pabellon;
      $("#equipoLocal").value = data.equipolocal;
      $("#equipoVisitante").value = data.equipovisitante;
    };
    const data = await getData();

    getCategorias();
    getEquipos();
    equiposSelector();
    getPabellones();
    getArbitros();
    printDataToForm(data);
  });
</script>

<svelte:head>
  <title>Editar Partido - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Editar Partido</h1>
  <div class="flex flex-row gap-8 w-full">
    <label for="fecha" class="label text-left py-4 w-full">
      <span>Hora del Partido</span>
      <input
        type="datetime-local"
        class="input"
        name="fecha"
        id="fecha"
        required
      />
    </label>
    <label for="categoria" class="label text-left py-4 w-full">
      <span>Categoria</span>
      <select class="input" name="categoria" id="categoria" required>
        <option value="0" selected disabled>Selecciona una categoria</option>
      </select>
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label for="pabellon" class="label text-left py-4 w-full">
      <span>Pabellon</span>
      <select class="input" name="pabellon" id="pabellon" required>
        <option value="0" selected disabled>Selecciona un pabellon</option>
      </select></label
    >
    <label for="arbitro" class="label text-left py-4 w-full">
      <span>Arbitro</span>
      <select class="input" name="arbitro" id="arbitro" required>
        <option value="0" selected disabled>Selecciona un arbitro</option>
      </select></label
    >
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label for="equipoLocal" class="label text-left py-4 w-full">
      <span>Equipo Local</span>
      <select class="input equipo" name="equipoLocal" id="equipoLocal" required>
        <option value="0" selected disabled>Selecciona un equipo</option>
      </select>
    </label>
    <label for="equipoVisitante" class="label text-left py-4 w-full">
      <span>Equipo Visitante</span>
      <select
        class="input equipo"
        name="equipoVisitante"
        id="equipoVisitante"
        required
      >
        <option value="0" selected disabled>Selecciona un equipo</option>
      </select>
    </label>
  </div>

  <div class="text-center">
    <button class="btn variant-filled-primary m-4 p-4 w-80"
      >Crear Partido</button
    >
  </div>
</form>
