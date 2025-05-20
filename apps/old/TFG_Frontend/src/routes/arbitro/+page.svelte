<script>
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  onMount(() => {});
</script>

<svelte:head>
  <title>Inicio Arbitro - PerformSquad</title>
</svelte:head>

<h1 class="text-4xl text-center py-8">Inicio Arbitros</h1>
<div class="w-full text-token grid grid-cols-2 md:grid-cols-3 gap-8">
  <a class="card card-hover overflow-hidden" href="/arbitro/equipos">
    <header>
      <img
        loading="lazy"
        src="/equipos.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Equipos</h3>
    </div>
    <hr class="opacity-50" />
  </a>
  <a class="card card-hover overflow-hidden" href="arbitro/jugadores">
    <header>
      <img
        loading="lazy"
        src="/jugadores.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Jugadores</h3>
    </div>
    <hr class="opacity-50" />
  </a>
  <a class="card card-hover overflow-hidden" href="arbitro/partidos">
    <header>
      <img
        loading="lazy"
        src="/partidos.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Partidos</h3>
    </div>
    <hr class="opacity-50" />
  </a>
  <a class="card card-hover overflow-hidden" href="arbitro/staff">
    <header>
      <img
        loading="lazy"
        src="/staff.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Staff</h3>
    </div>
    <hr class="opacity-50" />
  </a>
  <!-- <a class="card card-hover overflow-hidden" href="arbitro/sanciones">
    <header>
      <img
        loading="lazy"
        src="/federation.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Sanciones</h3>
    </div>
    <hr class="opacity-50" />
  </a> -->
  <!-- <a class="card card-hover overflow-hidden" href="arbitro/user">
    <header>
      <img
        loading="lazy"
        src="/user.jpg"
        class="bg-black/33 w-full aspect-[16/9] filter grayscale hover:grayscale-0 transition duration-500 ease-in-out hover:filter-none"
        alt="Post"
      />
    </header>
    <div class="p-4 space-y-4 text-center">
      <h3 class="h3" data-toc-ignore>Mi Usuario</h3>
    </div>
    <hr class="opacity-50" />
  </a> -->
</div>

<style></style>
