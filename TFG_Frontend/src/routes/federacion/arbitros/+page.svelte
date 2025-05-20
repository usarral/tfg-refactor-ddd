<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = [];

  onMount(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/arbitro`
      );
      if (response.ok) {
        data = await response.json();

        if (data.message != "No hay arbitros") {
          const $ = (selector) => document.querySelector(selector);
          const table = $(".table");
          data.data.forEach((arbitro) => {
            table.innerHTML += `<tr>
            <td>
              <img
                src="${arbitro.foto}"
                alt="Foto de ${arbitro.nombre}"
                class="rounded-full w-10 h-10"
                loading="lazy"
              />
              </td>
            <td>${
              arbitro.apellido2 != null
                ? arbitro.apellido +
                  " " +
                  arbitro.apellido2 +
                  ", " +
                  arbitro.nombre
                : arbitro.apellido1 + ", " + arbitro.nombre
            }</td>
            <td>${
              new Date().getFullYear() -
              new Date(arbitro.fechaNacimiento).getFullYear()
            }</td>
            <td>${arbitro.DNI}</td>
            <td>${arbitro.estado}</td>
            <td style="display: flex;flex-direction: column;">
                <a href="/federacion/arbitros/editar/${
                  arbitro.id
                }" class="btn btn-sm variant-primary">Editar</a>
                <a href="/federacion/arbitros/borrar/${
                  arbitro.id
                }" class="btn btn-sm variant-danger">Borrar</a>
                </td>`;
          });
        }
      } else {
        console.info("Error al obtener los datos de la API:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  });
  const tableSimple = {
    head: ["Foto", "Nombre", "Edad", "DNI", "Estado", "Acciones"],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de Arbitros - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de Arbitros</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/arbitros/crear"
      class=" btn variant-filled-primary m-4 p-4 w-80"
    >
      Nuevo Arbitro
    </a>
  </div>
</div>
