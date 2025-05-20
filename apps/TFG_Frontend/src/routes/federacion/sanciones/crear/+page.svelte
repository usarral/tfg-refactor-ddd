<!-- <script>
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
    console.log(dataObject);

    sendForm(dataObject);
  };
  const sendForm = async (data) => {
    const response = await fetch(
      `http://${window.location.hostname}:3000/sancion`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (res.message === "Sancion creada correctamente") {
      alert("Sanción creada correctamente");
      window.location.href = "/federacion/sanciones";
    }
  };
  onMount(() => {
    const getEquipo = async (id) => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/equipo/${id}`
      );
      const res = await response.json();
      return res.data.nombre;
    };
    const getPartidos = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/partido`
      );

      const res = await response.json();
      const select = document.getElementById("partido");
      const partidos = res.data;
      partidos.forEach(async (partido) => {
        // para cada partido añadir el nombre del equipo local y visitante el cual se obtiene con el id del equipo
        const equipoLocal = await getEquipo(partido.equipoLocal);
        const equipoVisitante = await getEquipo(partido.equipoVisitante);
        const option = document.createElement("option");
        option.value = partido.id;
        option.text = `${equipoLocal} vs ${equipoVisitante}`;
        select.appendChild(option);
      });
    };
    getPartidos();

    const getJugadores = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/jugador`
      );

      const res = await response.json();
      const select = document.getElementById("sancionado");
      const jugadores = res.data;
      let jugadoresArray = [];
      jugadores.forEach((jugador) => {
        //para cada jugador añadir el nombre y el id al array
        jugadoresArray.push({
          nombre: jugador.nombre,
          apellido: jugador.apellido,
          apellido2: jugador.apellido2,
          id: jugador.id,
        });
      });
      jugadoresArray.sort((a, b) => {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });

      return jugadoresArray;
    };

    const jugadores = getJugadores();

    addEventListener("change", (e) => {
      const select = document.getElementById("tipo");
      const sancionado = document.getElementById("sancionado");
      const sancionadolbl = document.getElementById("sancionadolbl");
      if (select.value == 1) {
        sancionadolbl.textContent = "Jugador Sancionado";
        jugadores.then((jugadores) => {
          //   // para cada jugador añadir el nombre y el id al array si no existe ya
          jugadores.forEach((jugador) => {
            //     //comprobar si existe el jugador en el select
            if (
              !Array.from(sancionado.options).some(
                (option) => option.value == jugador.id
              )
            ) {
              const option = document.createElement("option");
              option.value = jugador.id;
              option.text = `${jugador.nombre} ${jugador.apellido} ${jugador.apellido2}`;
              option.setAttribute("data-type", "Jugador");
              sancionado.appendChild(option);
            }
          });
        });
        sancionado.disabled = false;
      } else if (select.value == 2) {
        sancionadolbl.textContent = "Equipo Sancionado";
        // Borrar todos los jugadores del select

        sancionado.disabled = false;
      } else if (select.value == 3) {
        sancionadolbl.textContent = "Club Sancionado";
        sancionado.disabled = false;
      } else if (select.value == 4) {
        sancionadolbl.textContent = "Staff Sancionado";
        sancionado.disabled = false;
      } else if (select.value == 5) {
        sancionadolbl.textContent = "Árbitro Sancionado";
        sancionado.disabled = false;
      }
    });
  });
</script>

<svelte:head>
  <title>Crear Sanción - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Nueva Sanción</h1>
  <div class="flex flex-row w-full flex-wrap md:flex-nowrap">
    <label for="fecha" class="label text-left py-4 w-full">
      <span>Fecha</span>
      <input
        type="datetime-local"
        class="input"
        name="fecha"
        id="fecha"
        required
      />
    </label>
    <label for="partido" class="label text-left py-4 w-full">
      <span>Partido</span>
      <select class="input" name="partido" id="partido" required>
        <option value="0" selected disabled>Selecciona un Partido</option>
      </select>
    </label>
  </div>
  <div class="flex flex-row w-full flex-wrap md:flex-nowrap">
    <label for="tipo" class="label text-left py-4 w-full">
      <span>Tipo</span>
      <select class="input" name="tipo" id="tipo" required>
        <option value="0" selected disabled>Selecciona un tipo</option>
        <option value="1">Jugador</option>
        <option value="2">Equipo</option>
        <option value="3">Club</option>
        <option value="4">Staff</option>
        <option value="5">Árbitro</option>
      </select>
    </label>
    <label for="sancionado" class="label text-left py-4 w-full">
      <span id="sancionadolbl" required>Sancionado:</span>
      <select class="input" name="sancionado" id="sancionado" disabled>
        <option value="0" selected disabled>Selecciona un </option>
      </select>
    </label>
  </div>
  <div class="flex flex-row w-full flex-wrap md:flex-nowrap">
    <label for="causa" class="label text-left py-4 w-full">
      <span>Causa</span>
      <textarea
        class="textarea"
        name="causa"
        id="causa"
        cols="30"
        rows="10"
        required
      />
    </label>
  </div>
  <div class="text-center">
    <button
      type="submit"
      class="
            btn
            variant-filled-primary
            m-4
            p-4
            w-80
            "
    >
      Guardar
    </button>
  </div>
</form> -->
