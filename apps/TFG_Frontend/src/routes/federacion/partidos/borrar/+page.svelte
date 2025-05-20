<script>
  import { onMount } from "svelte";
  import { checkAuth } from "$functions/checkAuth";
  checkAuth();

  onMount(() => {
    window.location.href = "/federacion/partidos";
  });
</script>
