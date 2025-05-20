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
    // Cuando tenemos los datos, data es un array de objetos, cada objeto tiene una key y un value
    //para enviarlo a la API, tenemos que convertirlo a un objeto con la key y el value
    const dataObject = data.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
    sendForm(dataObject);
  };
  onMount(async () => {
    const getClubs = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/club`
      );

      const res = await response.json();
      const clubs = res.data;
      const select = document.getElementById("club");
      clubs.forEach((club) => {
        const option = document.createElement("option");
        option.value = club.id;
        option.text = club.nombre;
        select.appendChild(option);
      });
    };
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
    const getResponsables = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/staff`
      );

      const res = await response.json();
      const responsables = res.data;
      const select = document.getElementById("responsable");
      responsables.forEach((responsable) => {
        const option = document.createElement("option");
        option.value = responsable.id;
        option.text =
          responsable.nombre +
          " " +
          responsable.apellido +
          " (" +
          responsable.DNI +
          ")";
        select.appendChild(option);
      });
    };
    getClubs();
    getCategorias();
    getResponsables();
  });
  const sendForm = async (data) => {
    const response = await fetch(
      `http://${window.location.hostname}:3000/equipo`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (res.message === "Equipo creado") {
      alert("Equipo creado correctamente");
      window.location.href = "/federacion/equipos";
    }
  };
</script>

<svelte:head>
  <title>Crear Equipo - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Nuevo Equipo</h1>

  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Nombre *</span>
      <input
        class="input"
        type="text"
        name="nombre"
        placeholder="Nombre"
        id="nombre"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Club *</span>
      <select class="input" name="club" id="club" required>
        <option value="" disabled selected>Selecciona un club</option>
      </select>
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Categoria *</span>
      <select class="input" name="categoria" id="categoria" required>
        <option value="" disabled selected>Selecciona una categoría</option>
      </select>
    </label><label class="label text-left py-4 w-full">
      <span>Responsable *</span>
      <select class="input" name="responsable" id="responsable" required>
        <option value="" disabled selected>Selecciona un responsable</option>
      </select>
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Teléfono *</span>
      <input
        class="input"
        type="number"
        name="telefono"
        id="telefono"
        placeholder="Teléfono"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Email *</span>
      <input
        class="input"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Dirección *</span>
      <input
        class="input"
        type="text"
        name="direccion"
        placeholder="Ej: Calle Mayor 27"
        id="direccion"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Ciudad *</span>
      <input
        class="input"
        type="text"
        name="ciudad"
        id="ciudad"
        placeholder="Ciudad"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Provincia *</span>
      <input
        class="input"
        type="text"
        name="provincia"
        id="provincia"
        placeholder="Provincia"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Código Postal *</span>
      <input
        class="input"
        type="number"
        name="CP"
        id="CP"
        placeholder="Ej: 50001"
        max="99999"
        min="00001"
        maxlength="5"
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
</form>
