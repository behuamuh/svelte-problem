<script>
  import cn from 'classnames';
  import Info from '$components/Info';

  $: componentClass = cn($$props.class);
</script>

<div class={componentClass}>
  <Info />
</div>
