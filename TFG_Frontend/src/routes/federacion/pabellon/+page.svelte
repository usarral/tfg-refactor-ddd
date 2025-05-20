<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = []; // Variable para almacenar los datos de la API

  onMount(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/pabellon`
      );
      if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.data.forEach((pabellon) => {
          table.innerHTML += `<tr>
            <td>${pabellon.nombre}</td>
            <td>${pabellon.direccion}, ${pabellon.CP} ${pabellon.ciudad} ${pabellon.provincia}  </td>
            <td>${pabellon.email}</td>
            <td>${pabellon.telefono}</td>
              <td class="flex flex-col text-right">
                  <a href="/federacion/pabellon/editar/${pabellon.id}" class="btn btn-sm variant-primary">Editar</a>
                  <a href="/federacion/pabellon/borrar/${pabellon.id}" class="btn btn-sm variant-danger">Borrar</a>
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
    head: ["Nombre", "Dirección", "Email", "Teléfono", "Acciones"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de pabellón - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de pabellón</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/pabellon/crear"
      class="
      btn
      variant-filled-primary
      m-4
      p-4
      w-80
      "
    >
      Nuevo pabellón
    </a>
  </div>
</div>
