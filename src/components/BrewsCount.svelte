<script lang="ts">
  import FaGlassWhiskey from "svelte-icons/fa/FaGlassWhiskey.svelte";
  import Icon from "./Icon.svelte";
  export let brewsCount = 0;
</script>

<div class="flex items-center justify-center px-2">
  <Icon color="#333">
    <FaGlassWhiskey />
  </Icon>
  <div class="brews-count__value text-lg px-2">
    {brewsCount}
  </div>
</div>
