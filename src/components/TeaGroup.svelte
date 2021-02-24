<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { ITea, ITeaGroup } from "./../pages/types";
  import { CATEGORIES_COLOR } from "./../pages/constants";
  import TeaCard from "./TeaCard.svelte";

  export let teaGroup: ITeaGroup;

  const dispatch = createEventDispatcher();

  function handleTeaSelect(e: any) {
    dispatch("select", e.detail);
  }
</script>

<div class="tea-group flex flex-col py-2">
  <!-- <h2 class="flex items-center justify-start bg-gray-100 rounded-xl shadow p-4">
    <div
      class="tea-group__badge w-4 mr-2 rounded-full"
      style="background-color:{CATEGORIES_COLOR[teaGroup.type.toUpperCase()]};"
    />
    {teaGroup.type}
  </h2> -->
  <div class="flex flex-row w-full">
    <div class="scrollable grid grid-flow-col auto-cols-auto gap-4 px-4">
      {#each teaGroup.list as tea}
        <TeaCard {tea} on:select={handleTeaSelect} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .tea-group {
    overflow-x: auto;
  }
  :global(.tea-group__badge) {
    width: 20px;
    height: 20px;
  }
</style>
