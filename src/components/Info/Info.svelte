<script>
  import cn from 'classnames';
  import { isDesktop } from '$stores/screens';
  import { slide } from 'svelte/transition';

  import styles from './Info.module.scss';

  let open = false;
  const toggleOpen = () => (open = !open);

  $: componentClass = cn($$props.class, styles.Info);
</script>

<div class={componentClass}>
  <h3
    on:click={toggleOpen}
  >
    Title
  </h3>
  {#if open || !$isDesktop}
    <ul transition:slide class={styles.Info__Rows}>
      <li>
        One
      </li>
      <li>
        Two
      </li>
      <li>
        Three
      </li>
    </ul>
  {/if}
</div>
