<!-- <script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = [];

  onMount(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/sancion`
      );
      if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.data.forEach((sancion) => {
          table.innerHTML += `<tr>
            <td>${sancion.arbitro}</td> 
            <td>${sancion.tipo}</td> 
            <td>${sancion.destinatario}</td>  
            <td>${sancion.causa}</td>  
            <td>${new Date(sancion.fecha).toLocaleDateString()}</td>
                  <td>${sancion.partido}</td>  
                  <td>${sancion.estado}</td>  
                  <td style="display: flex;flex-direction: column;">
                      <a href="/federacion/categorias/editar/${
                        sancion.id
                      }" class="btn btn-sm variant-primary">Editar</a>
                      <a href="/federacion/categorias/borrar/${
                        sancion.id
                      }" class="btn btn-sm variant-danger">Borrar</a>
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
    head: [
      "Arbitro",
      "Destino de sanción",
      "Sancionado",
      "Causa",
      "Fecha Sanción",
      "Partido",
      "Estado",
      "Acciones",
    ],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de Sanciones - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de Sanciones</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/sancions/crear"
      class="
          btn
          variant-filled-primary
          m-4
          p-4
          w-80
          "
    >
      Nuevo sancion
    </a>
  </div>
</div> -->
