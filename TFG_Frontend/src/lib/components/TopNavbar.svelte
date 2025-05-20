<script>
  import { AppBar } from "@skeletonlabs/skeleton";
  import { onMount } from "svelte";
  const logout = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
    localStorage.clear();
  };
  onMount(() => {
    const domain = window.location.host;
    const $ = (selector) => document.querySelector(selector);
    const aHome = $("#aHome");
    aHome.href = `http://${domain}/`;
    const nombre = $("#nombreUsuario");
    const guest = $("#guest");
    const logged = $("#logged");
    if (localStorage.getItem("nombre")) {
      nombre.textContent = localStorage.getItem("nombre");
      guest.classList.add("hidden");
      logged.classList.remove("hidden");
    } else {
      guest.classList.remove("hidden");
      logged.classList.add("hidden");
    }
  });
</script>

<AppBar class="rounded-3xl">
  <svelte:fragment slot="lead">
    <a id="aHome" class="flex items-center" href="/"
      ><img
        loading="lazy"
        src="/logo.png"
        alt="PerformSquad Logo"
        class="aspect-auto h-10 m-2"
      />
      <strong class="text-xl uppercase">PerformSquad</strong></a
    >
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <span class="hidden" id="logged">
      <span>Bienvenid@ <span id="nombreUsuario" class="font-bold" /></span>

      <button class="btn btn-sm variant-ghost-surface" on:click={logout}>
        Logout
      </button>
    </span>
    <span class="hidden" id="guest">
      <!-- <a class="btn btn-sm variant-ghost-surface" href="/afiliacion">
        Afiliarse
      </a> -->
      <a class="btn btn-sm variant-ghost-surface" href="/login"> Login </a>
    </span>
  </svelte:fragment>
</AppBar>
