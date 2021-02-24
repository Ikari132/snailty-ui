<script lang="ts">
  import { _ } from "svelte-i18n";
  import { BrewingGlasses } from "./../../constants";
  import { currentTeaStore } from "./../../../stores/currentTeaStore";
  import Card from "./../../../components/Card.svelte";

  let currentTea = $currentTeaStore;

  $: {
    console.log("curr tea", currentTea);
  }
  let name = (currentTea as any).name;
</script>

<div class="wrapper">
  <div class="content p-4">
    <h1 class="title mb-8 ps-4 flex justify-center">
      {$_("choose_glass")}
    </h1>

    <div class="title py-4 text-2xl">{name}</div>
    <div class="grid grid-cols-3 gap-4 items-center justify-center">
      {#each BrewingGlasses as glass}
        <a href="/brew/prepare">
          <Card class="w-full">
            <h2 class="text-md">{glass}</h2>
          </Card>
        </a>
      {/each}
    </div>
  </div>
</div>
