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
    const res = sendForm(dataObject).then((res) =>
      res.message === "Staff actualizado"
        ? (window.location.href = "/federacion/staff")
        : alert("Error al actualizar staff")
    );
  };

  const sendForm = async (data) => {
    const id = window.location.href.split("/").pop();
    const response = await fetch(
      `http://${window.location.hostname}:3000/staff/` + id,
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
    // const id = //get id as last part of url
    const id = window.location.href.split("/").pop();
    const getData = async () => {
      const response = await fetch(
        `http://${window.location.hostname}:3000/staff/${id}`
      );
      const res = await response.json();
      return res.data;
    };
    const printDataToForm = (data) => {
      const $ = (selector) => document.querySelector(selector);
      $("#nombre").value = data.nombre;
      $("#nombre").removeAttribute("readonly");
      $("#apellido").value = data.apellido;
      $("#apellido").removeAttribute("readonly");
      $("#apellido2").value = data.apellido2;
      $("#apellido2").removeAttribute("readonly");
      $("#dni").value = data.DNI;
      $("#dni").removeAttribute("readonly");
      $("#telefono").value = data.telefono;
      $("#telefono").removeAttribute("readonly");
      $("#email").value = data.email;
      $("#email").removeAttribute("readonly");
      $("#direccion").value = data.direccion;
      $("#direccion").removeAttribute("readonly");
      $("#ciudad").value = data.ciudad;
      $("#ciudad").removeAttribute("readonly");
      $("#provincia").value = data.provincia;
      $("#provincia").removeAttribute("readonly");
      $("#CP").value = data.CP;
      $("#CP").removeAttribute("readonly");
      $("#cargo").value = data.cargo;
      $("#cargo").removeAttribute("readonly");
      $("#fecha").value = new Date(data.fechaNacimiento)
        .toISOString()
        .split("T")[0];
      $("#fecha").removeAttribute("readonly");
    };
    const data = await getData();
    printDataToForm(data);
  });
</script>

<svelte:head>
  <title>Editar Staff - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Nuevo Staff</h1>

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
      <span>Apellido *</span>
      <input
        class="input"
        type="text"
        name="apellido"
        placeholder="Apellido"
        id="apellido"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Segundo Apellido</span>
      <input
        class="input"
        type="text"
        id="apellido2"
        name="apellido2"
        placeholder="Segundo Apellido"
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>DNI *</span>
      <input
        class="input"
        type="text"
        name="DNI"
        placeholder="DNI"
        id="dni"
        required
      />
    </label>
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
      <span>Cargo *</span>
      <input
        class="input"
        type="text"
        name="cargo"
        placeholder="Cargo en el club"
        id="cargo"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Fecha Nacimiento *</span>
      <input
        class="input"
        name="fechaNacimiento"
        type="date"
        id="fecha"
        required
      />
    </label>
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
