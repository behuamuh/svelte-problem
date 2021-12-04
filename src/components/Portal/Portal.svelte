<script>
  import { onMount, onDestroy } from 'svelte';
  // https://github.com/sveltejs/svelte/issues/3088#issuecomment-505785516
  let ref;
  let portal;

  onMount(() => {
    portal = document.createElement('div');
    portal.className = 'portal';
    document.body.appendChild(portal);
    portal.appendChild(ref);
  });

  onDestroy(() => {
    if (typeof document !== 'undefined' && portal) {
      document.body.removeChild(portal);
    }
  });
</script>

<div class="portal-clone">
  <div bind:this={ref}>
    <slot />
  </div>
</div>

<style>
  .portal-clone {
    display: none;
  }
</style>
