<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();
  let data = [];

  onMount(async () => {
    const getEquipo = async (id) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/equipo/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          return data.data.nombre;
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };
    const getPabellon = async (id) => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/pabellon/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          return data.data.nombre;
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    };

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/partido?club=${localStorage.getItem("club")}`
      );
      if (response.status == 204) {
        return;
      } else if (response.ok) {
        data = await response.json();
        const $ = (selector) => document.querySelector(selector);
        const table = $(".table");

        data.data.forEach(async (partido) => {
          const equipoLocal = await getEquipo(partido.equipoLocal);
          const equipoVisitante = await getEquipo(partido.equipoVisitante);
          const pabellon = await getPabellon(partido.pabellon);
          table.innerHTML += `<tr>
            <td>${new Date(partido.fecha).toLocaleDateString()} 
              ${
                new Date(partido.fecha).getHours() < 10
                  ? "0" + new Date(partido.fecha).getHours()
                  : new Date(partido.fecha).getHours()
              }:${
            new Date(partido.fecha).getMinutes() < 10
              ? "0" + new Date(partido.fecha).getMinutes()
              : new Date(partido.fecha).getMinutes()
          }</td>
            <td>${equipoLocal}</td>
            <td>${equipoVisitante}</td>
            <td>${pabellon}</td>
            <td style="display: flex;flex-direction: column;">
                <a href="/federacion/partidos/editar/${
                  partido.id
                }" class="btn btn-sm variant-primary">Editar</a>
                <a href="/federacion/partidos/borrar/${
                  partido.id
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
      "Fecha del encuentro",
      "Equipo local",
      "Equipo visitante",
      "Pabellón",
      "Acciones",
    ],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de partidos - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de partidos</h1>
  <Table source={tableSimple} />
  <div class="text-center">
    <a
      href="/federacion/partidos/crear"
      class="
          btn
          variant-filled-primary
          m-4
          p-4
          w-80
          "
    >
      Nuevo partido
    </a>
  </div>
</div>
