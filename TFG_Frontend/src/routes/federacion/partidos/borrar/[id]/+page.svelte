<script>
  import { onMount } from "svelte";
  import { Toast } from "@skeletonlabs/skeleton";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();
  onMount(async () => {
    const $ = (selector) => document.querySelector(selector);
    const deleteButton = $("#delete");
    deleteButton.addEventListener("click", async () => {
      const id = window.location.pathname.split("/").pop();
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/partido/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          alert("Partido borrado correctamente");

          window.location.href = "/federacion/partidos";
        } else {
          console.error(
            "Error al obtener los datos de la API:",
            response.status
          );
        }
      } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
      }
    });
  });
</script>

<Toast />

<div class="flex flex-col gap-8">
  <h1 class="text-4xl text-center py-8">Borrar Partido</h1>
  <h2 class="text-2xl text-center py-8">¿Seguro que quieres borrarlo?</h2>
  <div class="flex justify-center">
    <button class="btn btn-primary" id="delete">Borrar</button>
    <button
      class="btn btn-primary"
      onclick="window.location.href = '/federacion/partidos'">Cancelar</button
    >
  </div>
</div>
