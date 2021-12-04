<script>
  import cn from 'classnames';
  import { onMatchMediaChange } from '$stores/screens';
  
  import styles from './Layout.module.scss';
  import CartInfo from '$components/CartInfo';

  $: componentClass = cn($$props.class, styles.Layout);
</script>

<div use:onMatchMediaChange class={componentClass}>
  <div class={styles.Layout__Container}>
    <div class={styles.Layout__Content}>
      <section class={styles.Layout__Products}>
        <CartInfo />
      </section>
      <section class={styles.Layout__Step}>
        <slot />
      </section>
    </div>
  </div>
</div>
