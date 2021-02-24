<div
  class="card flex flex-col items-start justify-start rounded-xl shadow p-4 mr-4 {$$props.class}"
  style={$$props.style}
>
  <slot />
</div>

<style lang="scss">
  .card {
    min-height: 100px;
    min-width: 100px;

    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);

    background: var(--card-background);
    color: var(--font-color);
  }
</style>
