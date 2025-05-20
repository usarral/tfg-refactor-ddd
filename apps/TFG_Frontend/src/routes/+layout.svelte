<script>
  // The ordering of these imports is critical to your app working properly
  import "@skeletonlabs/skeleton/themes/theme-modern.css";
  // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  // Most of your app wide CSS should be put in this file
  import "../app.postcss";
  import { AppShell } from "@skeletonlabs/skeleton";
  import TopNavbar from "$components/TopNavbar.svelte";
</script>

<!-- App Shell -->
<AppShell class="gap-2 px-4 py-2 ">
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <TopNavbar />
    <span id="browser-fingerprint" />
    <!-- Toasts -->
  </svelte:fragment>
  <!-- Page Route Content -->

  <div
    class="rounded-3xl p-4 card variant-filled-surface max-h-screen min-h-full overflow-y-auto overflow-x-hidden"
  >
    <slot />
  </div>
</AppShell>
