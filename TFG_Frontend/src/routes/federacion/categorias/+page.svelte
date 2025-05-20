<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();
  let data = [];

  onMount(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/categoria`
      );

      if (response.ok) {
        data = await response.json();
        if (data.message == "No hay categorias") {
          return;
        }
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.data.forEach((row) => {
          if (row.genero == "M") {
            row.genero = "Masculino";
          } else if (row.genero == "F") {
            row.genero = "Femenino";
          } else {
            row.genero = "Mixto";
          }
          table.innerHTML += `<tr>
            <td>${row.nombre}</td>
            <td>${row.minEdad}</td>
            <td>${row.maxEdad}</td>
            <td>${row.genero}</td>
            <td style="display: flex;flex-direction: column;">
                <a href="/federacion/categorias/editar/${row.id}" class="btn btn-sm variant-primary">Editar</a>
                <a href="/federacion/categorias/borrar/${row.id}" class="btn btn-sm variant-danger">Borrar</a>
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
    head: ["Nombre", "Edad Mínima", "Edad Máxima", "Genero", "Acciones"],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de Categorías - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de Categorías</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/categorias/crear"
      class=" btn variant-filled-primary m-4 p-4 w-80"
    >
      Nueva Categoría
    </a>
  </div>
</div>
