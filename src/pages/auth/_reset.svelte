<main>
  <slot />
</main>

<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    min-height: 100%;
    height: 100%;

    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
