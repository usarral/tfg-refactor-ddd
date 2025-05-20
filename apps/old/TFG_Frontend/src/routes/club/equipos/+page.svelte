<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = [];
  onMount(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/equipo?club=${localStorage.getItem(
          "club"
        )}`
      );
      if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.data.forEach((element) => {
          console.log(element);

          table.innerHTML += `<tr>
            <td><img loading="lazy" class="rounded-full" src="${element.escudo}"></td>
            <td>${element.nombre}</td>
            <td>${element.email}</td>
            <td>${element.telefono}</td>
            
            </td>`;
        });
      } else {
        console.error("Error al obtener los datos de la API:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  });
  const tableSimple = {
    head: ["Foto", "Nombre", "Email", "Teléfono"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de equipos - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de equipos</h1>
  <div class="flex flex-row justify-center">
    <input
      type="text"
      class="form-control input w-80"
      placeholder="Buscar equipo"
    />
    <button class="btn variant-filled-primary">Buscar</button>
  </div>
  <Table source={tableSimple} />
</div>
