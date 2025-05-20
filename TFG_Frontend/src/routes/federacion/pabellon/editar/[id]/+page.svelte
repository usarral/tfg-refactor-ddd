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
    const getData = async () => {
      const id = window.location.pathname.split("/").pop();
      const response = await fetch(
        `http://${window.location.hostname}:3000/pabellon/${id}`
      );
      const res = await response.json();
      const pabellon = res.data;
      const nombre = document.getElementById("nombre");
      const direccion = document.getElementById("direccion");
      const ciudad = document.getElementById("ciudad");
      const CP = document.getElementById("CP");
      const provincia = document.getElementById("provincia");
      const telefono = document.getElementById("telefono");
      const email = document.getElementById("email");

      nombre.value = pabellon.nombre;
      direccion.value = pabellon.direccion;
      ciudad.value = pabellon.ciudad;
      CP.value = pabellon.CP;
      provincia.value = pabellon.provincia;
      telefono.value = pabellon.telefono;
      email.value = pabellon.email;
    };
    getData();
  });
  const sendForm = async (data) => {
    const response = await fetch(
      `http://${window.location.hostname}:3000/pabellon`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();
    if (res.message === "Pabellon creado") {
      alert("Pabellón creado correctamente");
      window.location.href = "/federacion/pabellon";
    }
  };
</script>

<svelte:head>
  <title>Crear Pabellón - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Nuevo Pabellón</h1>

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
      <span>Dirección *</span>
      <input
        class="input"
        type="text"
        name="direccion"
        placeholder="Dirección"
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
        placeholder="Ciudad"
        id="ciudad"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>CP *</span>
      <input
        class="input"
        type="number"
        name="CP"
        placeholder="CP"
        id="CP"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Provincia *</span>
      <input
        class="input"
        type="text"
        name="provincia"
        placeholder="Provincia"
        id="provincia"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Teléfono *</span>
      <input
        class="input"
        type="tel"
        name="telefono"
        placeholder="Telefono"
        id="telefono"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Email *</span>
      <input
        class="input"
        type="email"
        name="email"
        placeholder="Email"
        id="email"
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
