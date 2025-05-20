<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = []; // Variable para almacenar los datos de la API

  onMount(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/club`); // Reemplaza "URL_DE_LA_API" con la URL real de tu API
      if (response.ok) {
        data = await response.json(); // Almacenar los datos recuperados en la variable data
        //mostrar en la tabla con clase table los datos de la variable data

        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");
        data.data.forEach((club) => {
          table.innerHTML += `<tr>
            <td>
              <img
                src="${club.escudo}"
                alt="Foto de ${club.nombre}"
                class="rounded-full w-10 h-10"
                loading="lazy"
              />
              </td>
            <td>${club.nombre}</td>
            <td>${club.NIF}</td>
            <td>${club.email}</td>
            <td>${club.telefono}</td>
              <td class="flex flex-col text-right">
                  <a href="/federacion/clubs/editar/${club.id}" class="btn btn-sm variant-primary">Editar</a>
                  <a href="/federacion/clubs/borrar/${club.id}" class="btn btn-sm variant-danger">Borrar</a>
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
    head: ["Escudo", "Nombre", "CIF", "Email", "Teléfono", "Acciones"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de clubs - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de clubs</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/clubs/crear"
      class="
      btn
      variant-filled-primary
      m-4
      p-4
      w-80
      "
    >
      Nuevo club
    </a>
  </div>
</div>
