<script>
  import { onMount } from "svelte";

  onMount(async () => {
    const getPartidos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/partido`
        );
        if (response.ok) {
          if (response.status === 204) {
            return [];
          } else {
            const data = await response.json();
            return data.data;
          }
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
    const getEquipos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/equipo`
        );
        if (response.ok) {
          if (response.status === 204) {
            return [];
          } else {
            const data = await response.json();
            return data.data;
          }
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

    const partidos = await getPartidos();
    const equipos = await getEquipos();

    const $ = (selector) => document.querySelector(selector);

    const nombre = $("#nombreUser");
    const guest = $("#guest");
    const logged = $("#logged");
    const local = $("#local");
    const visitante = $("#visitante");
    const pendiente = $("#pendiente");
    const jugados = $("#jugados");
    if (localStorage.getItem("nombre")) {
      nombre.textContent = localStorage.getItem("nombre");
      guest.classList.add("hidden");
      logged.classList.remove("hidden");
    } else {
      guest.classList.remove("hidden");
      logged.classList.add("hidden");
    }

    if (partidos.length > 0) {
      let partidosJugados = partidos.filter((partido) => {
        const fecha = new Date(partido.fecha);
        return fecha < new Date();
      });
      jugados.textContent = partidosJugados.length;
      let proximosPartidos = partidos.filter((partido) => {
        const fecha = new Date(partido.fecha);
        return fecha > new Date();
      });
      if (proximosPartidos.length === 0) {
        return;
      }

      pendiente.textContent = proximosPartidos.length;

      // sort proximos partidos by date
      proximosPartidos.sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        return fechaA - fechaB;
      });

      const proximoPartido = proximosPartidos[0];
      const localEquipo = equipos.find(
        (equipo) => equipo.id === proximoPartido.equipoLocal
      );
      const visitanteEquipo = equipos.find(
        (equipo) => equipo.id === proximoPartido.equipoVisitante
      );

      local.textContent = localEquipo.nombre;
      visitante.textContent = visitanteEquipo.nombre;
    }
  });
</script>

<svelte:head>
  <title>Inicio</title>
</svelte:head>

<h1 class="text-4xl text-center py-4">Inicio</h1>
<div class="flex place-content-around">
  <div class="card p-4 w-96 flex flex-col">
    <h2 class="text-2xl">Partidos</h2>
    <p>Partidos pendientes: <span id="pendiente">0</span></p>
    <p>Partidos jugados: <span id="jugados">0</span></p>
  </div>
  <div class="card p-4 w-96">
    <h2 class="text-2xl">Proximo Partido</h2>
    <p>
      Local: <span class="font-extrabold" id="local" />
    </p>
    <p>Visitante: <span class="font-extrabold" id="visitante" /></p>
  </div>
</div>

<div class="card mt-8 p-8">
  <h2 class="text-2xl text-center py-2">Formulario de Contacto</h2>
  <form action="https://formspree.io/f/mqkovkyq" method="POST" class=" w-full">
    <label for="name">
      <span>Nombre</span>
      <input type="text" name="name" class="input" />
    </label>
    <label for="email">
      <span>Email</span>
      <input type="email" name="email" class="input" />
    </label>
    <label for="message">
      <span>Mensaje</span>
      <textarea name="message" class="input" />
    </label>
    <div class="w-full text-center py-0">
      <button type="submit" class="btn variant-filled-primary text-center w-36">
        Enviar
      </button>
    </div>
  </form>
</div>
