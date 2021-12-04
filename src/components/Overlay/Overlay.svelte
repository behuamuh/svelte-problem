<script>
  import cn from 'classnames';
  import { fade } from 'svelte/transition';

  import styles from './Overlay.module.scss';

  const defaultFade = { duration: 300 };

  export let open;
  export let onClose;
  export let inFade = defaultFade;
  export let outFade = defaultFade;

  $: componentClass = cn($$props.class, styles.Overlay);
</script>

{#if open}
  <div
    on:click|self={onClose}
    in:fade={inFade}
    out:fade={outFade}
    class={componentClass}
  >
    <slot />
  </div>
{/if}
