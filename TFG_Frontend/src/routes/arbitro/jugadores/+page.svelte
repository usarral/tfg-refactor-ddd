<script>
  import { Table, tableMapperValues } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  let data = []; // Variable para almacenar los datos de la API

  onMount(async () => {
    // vecomo
    // get domain from url

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/jugador`
      );
      if (response.ok) {
        data = await response.json();
        if (data.message == "No hay jugadores") {
          return;
        } else {
          const $ = (selector) => document.querySelector(selector);
          const table = $(".table");
          data.data.forEach((jugador) => {
            table.innerHTML += `<tr>
            <td><img loading="lazy" class="rounded-full" src="${
              jugador.foto
            }"></td>
                  <td>${
                    jugador.apellido2 != null
                      ? jugador.apellido +
                        " " +
                        jugador.apellido2 +
                        ", " +
                        jugador.nombre
                      : jugador.apellido1 + ", " + jugador.nombre
                  }</td>
                  <td>${
                    //calcular edad
                    new Date().getFullYear() -
                    new Date(jugador.fechaNacimiento).getFullYear()
                  }</td>
                  <td>${jugador.DNI}</td> 
                  <td>${jugador.email}</td>  
                  </tr>`;
          });
        }
      } else {
        console.error("Error al obtener los datos de la API:", response.status);
      }
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
    }
  });
  const tableSimple = {
    head: ["Foto", "Nombre", "Fecha de nacimiento", "DNI", "Email"], //Pasar datos a la tabla aqui
    body: tableMapperValues(data),
  };
</script>

<svelte:head>
  <title>Gestión de jugadores - PerformSquad</title>
</svelte:head>

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Gestión de jugadores</h1>
  <Table source={tableSimple} />
</div>
