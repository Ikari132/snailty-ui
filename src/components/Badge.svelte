<script lang="ts">
  import Icon from "./Icon.svelte";

  export let background = "#f2f2f2";
  export let icon: any;
  export let iconColor = "#a0a0a0";
</script>

<span class="badge" style="background:{background}">
  {#if icon}
    <Icon width={16} height={16} color={iconColor}>
      <svelte:component this={icon} />
    </Icon>
  {/if}
  <div class="badge__text">
    <slot />
  </div>
</span>

<style lang="scss">
  .badge {
    padding: 5px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius-default);

    &__text {
      padding: 0 5px;
    }
  }
</style>
