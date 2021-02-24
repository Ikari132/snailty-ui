<script type="ts">
  export let width = 24;
  export let height = 24;
  export let color = "";
  export let loading = false;
</script>

<div
  class="icon"
  class:rotating={loading}
  style="color:{color};width:{width}px;height:{height}px"
>
  <slot />
</div>

<style lang="scss">
</style>
