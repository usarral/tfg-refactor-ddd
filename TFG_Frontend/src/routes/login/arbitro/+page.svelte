<script>
  import { onMount } from "svelte";
  import { getCurrentBrowserFingerPrint } from "@rajesh896/broprint.js";

  onMount(async () => {
    const fingerprint = await getCurrentBrowserFingerPrint();
    const $ = (selector) => document.querySelector(selector);
    $("#browser-fingerprint").setAttribute("data-value", fingerprint);
  });
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
    const $ = (selector) => document.querySelector(selector);
    const fingerprint = $("#browser-fingerprint").getAttribute("data-value");

    dataObject.fingerprint = fingerprint;
    dataObject.page = "arbitro";

    const res = sendForm(dataObject);
    res.then((res) => {
      console.table(res);
      if (res.message === "Usuario logeado correctamente") {
        let token = res.data.token;
        let fingerprint = res.data.fingerprint;
        document.cookie = `token=${token}; max-age=172800`;
        window.location.href = "/arbitro";
      } else {
        alert("Error al iniciar sesión");
      }
    });
  };
  const sendForm = async (data) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const res = await response.json();

    return res;
  };
</script>

<svelte:head>
  <title>Login de Arbitros</title>
</svelte:head>
<form class="text-center" on:submit|preventDefault={handleOnSubmit}>
  <h1 class="text-6xl text-center p-10">Login de Árbitros</h1>
  <label class="label text-left py-4">
    <span>DNI</span>
    <input class="input" type="text" placeholder="DNI" name="DNI" />
  </label>
  <label class="label text-left py-4">
    <span>Contraseña</span>
    <input
      class="input"
      type="password"
      placeholder="Contraseña..."
      name="password"
    />
  </label>
  <div class="p-6"><a href="recoverpassword">¿Contraseña olvidada?</a></div>
  <button
    class="btn
    variant-filled-primary
    m-4
    p-4
    w-80"
    type="submit">Login</button
  >
</form>
