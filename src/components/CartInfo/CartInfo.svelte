<script>
  import cn from 'classnames';
  import { isDesktop } from '$stores/screens';

  import styles from './CartInfo.module.scss';
  import Desktop from './components/Desktop';
  import Mobile from './components/Mobile';
  import Content from './components/Content';

  $: componentClass = cn($$props.class, styles.CartInfo);
  $: component = $isDesktop ? Desktop : Mobile;
</script>

<svelte:component this={component} class={componentClass} >
  <Content />
</svelte:component>

<!-- {#if $isDesktop}
  <Desktop>
    <Content key="desktop" />
  </Desktop>
{:else}
  <Mobile>
    <Content key="mobile" />
  </Mobile>
{/if} -->
