<script lang="ts">
  import { _ } from "svelte-i18n";
  import FaRegClock from "svelte-icons/fa/FaRegClock.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import Card from "./../components/Card.svelte";
  import Icon from "./../components/Icon.svelte";
  import TeaGroup from "./../components/TeaGroup.svelte";
  import { currentTeaStore } from "./../stores/currentTeaStore";
  import { galleryStore } from "./../stores/galleryStore";

  import { metatags } from "@roxi/routify";
  metatags.title = "Tea gallery";
  metatags.description = "Description coming soon...";

  const gallery = $galleryStore;

  function handleTeaSelect(e: any) {
    const tea = e.detail;
    console.log("tea select", tea, e.detail, e);
    currentTeaStore.update((val) => tea);
    // goto("/brew/method");
  }
</script>

<div class="wrapper day">
  <div class="sun" />
  <div class="content">
    <div class="flex items-center justify-center w-full px-16 py-4">
      <h2
        class="title text-lg text-center font-bold flex items-center justify-center w-32"
      >
        Perfect for this time, lets brew it
      </h2>
    </div>
    <div class="brew-now">
      {#if gallery.length}
        <TeaGroup teaGroup={gallery[0]} on:select={handleTeaSelect} />
      {/if}
    </div>

    <h2 class="title text-lg font-bold flex items-center justify-center py-4">
      Quick actions
    </h2>
    <div class="grid grid-col-2 gap-4 grid-flow-col w-full px-4">
      <div class="w-full">
        <a href="/brew/type">
          <Card class="quick-action-card items-center justify-start w-full">
            <Icon width={80} height={80}>
              <FaRegClock />
            </Icon>
            <h2 class="text-lg font-bold">Timer</h2>
          </Card>
        </a>
      </div>
      <div class="quick-actions w-full">
        <a href="/add">
          <Card class="quick-action-card items-center justify-start w-full">
            <Icon width={80} height={80}>
              <FaPlus />
            </Icon>
            <h2 class="text-lg font-bold">Add new tea</h2>
          </Card>
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  :root {
    --sun-radius: 200px;
    --sun-top-margin: 20px;
  }

  .wrapper {
    width: 100%;
    min-height: 100%;
    height: auto;
    position: relative;
    background: var(--main-background);
    padding-top: calc(var(--sun-radius) / 2 + var(--sun-top-margin));
  }
  .content {
    min-height: 100%;
    height: 100%;
    backdrop-filter: var(--glass-blur);
    background: var(--glass-color);

    border-radius: 20px 20px 0px 0px;
    position: relative;
    z-index: 10;
    padding-bottom: 70px;
  }
  .title {
    color: var(--font-color);
  }
  .sun {
    position: absolute;
    top: var(--sun-top-margin);
    left: calc(50% - var(--sun-radius) / 2);
    width: var(--sun-radius);
    height: var(--sun-radius);
    border-radius: 50%;
    background: var(--sun-background);
  }

  .quick-actions {
    color: var(--font-color);
  }
  :global(.quick-action-card) {
    background: var(--main-background-from);
    color: var(--font-color);
  }
</style>
