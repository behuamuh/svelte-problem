<script>
  import cn from 'classnames';

  $: componentClass = cn($$props.class);
</script>

<div class={componentClass}>
  <slot />
</div>
