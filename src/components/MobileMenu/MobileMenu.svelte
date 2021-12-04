<script>
  import cn from 'classnames';
  import { fly } from 'svelte/transition';

  import styles from './MobileMenu.module.scss';
  import Portal from '../Portal';
  import Overlay from '../Overlay';

  const flyParams = { y: 100, duration: 300 };
  const fadeParams = { duration: 300 };

  export let open;
  export let onClose;

  $: componentClass = cn($$props.class, styles.MobileMenu);
</script>

<Portal>
  <Overlay
    inFade={fadeParams}
    outFade={{ ...fadeParams, delay: 200 }}
    {onClose}
    {open}
  >
    {#if open}
      <div
        in:fly={{ ...flyParams, delay: 100 }}
        out:fly={flyParams}
        class={componentClass}
      >
        <slot />
      </div>
    {/if}
  </Overlay>
</Portal>
