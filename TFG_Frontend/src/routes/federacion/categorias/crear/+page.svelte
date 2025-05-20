<script>
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

    sendForm(dataObject);
  };

  const sendForm = async (data) => {
    const response = await fetch(
      `http://${window.location.hostname}:3000/categoria`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();

    if (res.message === "Categoria creada correctamente") {
      alert("Categoria creada correctamente");
      window.location.href = "/federacion/categorias";
    }
  };
</script>

<svelte:head>
  <title>Crear Categoría - PerformSquad</title>
</svelte:head>

<form on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-4xl text-center py-8">Nueva Categoría</h1>

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
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Edad Mínima *</span>
      <input
        class="input"
        type="number"
        name="minEdad"
        id="minEdad"
        placeholder="Edad mínima"
        min="6"
        max="99"
        required
      />
    </label>
    <label class="label text-left py-4 w-full">
      <span>Edad Máxima *</span>
      <input
        class="input"
        type="number"
        name="maxEdad"
        id="maxEdad"
        placeholder="Edad máxima"
        min="6"
        max="99"
        required
      />
    </label>
  </div>
  <div class="flex flex-row gap-8 w-full">
    <label class="label text-left py-4 w-full">
      <span>Género *</span>
      <select class="input" name="genero" id="genero" required>
        <option value="M">Masculino</option>
        <option value="F">Femenino</option>
        <option value="X">Mixto</option>
      </select></label
    >
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
