<script>
  import cn from 'classnames';
  import MobileMenu from '$components/MobileMenu';

  import styles from './Mobile.module.scss';

  let openMenu = false;

  $: componentClass = cn($$props.class, styles.Mobile);

  const toggleOpenMenu = () => (openMenu = !openMenu);
</script>

<div data-id="mobile" class={componentClass}>
  <button on:click={toggleOpenMenu}>
    This is menu button
  </button>
  <MobileMenu onClose={toggleOpenMenu} open={openMenu}>
    <slot />
  </MobileMenu>
</div>


