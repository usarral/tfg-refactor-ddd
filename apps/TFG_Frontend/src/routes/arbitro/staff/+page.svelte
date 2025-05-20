<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = [];

  onMount(async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/staff`);
      if (response.ok) {
        if (response.status == 204) {
          return;
        }
        data = await response.json();

        if (data.message != "No hay staff") {
          const $ = (selector) => document.querySelector(selector);
          const table = $(".table");
          data.data.forEach((staff) => {
            table.innerHTML += `<tr>
            <td>
              <img
                src="${staff.foto}"
                alt="Foto de ${staff.nombre}"
                class="rounded-full w-10 h-10"
                loading="lazy"
              />
              </td>
            <td>${
              staff.apellido2 != null
                ? staff.apellido + " " + staff.apellido2 + ", " + staff.nombre
                : staff.apellido1 + ", " + staff.nombre
            }</td>
            <td>${
              new Date().getFullYear() -
              new Date(staff.fechaNacimiento).getFullYear()
            }</td>
            <td>${staff.DNI}</td>
            <td>${staff.estado}</td>
            </tr>`;
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
    head: ["Foto", "Nombre", "Edad", "DNI", "Estado"],
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de Staff - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de Staff</h1>
  <Table source={tableSimple} />
</div>
