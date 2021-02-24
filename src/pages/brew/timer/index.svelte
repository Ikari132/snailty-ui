<script lang="ts">
  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
  import Button from "./../../../components/Button.svelte";
  import Water from "./../../../components/Water.svelte";
  import { CATEGORIES_BREW_TIME } from "../../constants";
  import { onMount } from "svelte";
  import type { ITeaType } from "../../types";

  let brewingTime = 10;
  let teaType: ITeaType;

  onMount(() => {
    //[todo] maybe store this value in store
    if (window) {
      const hash = `${window.location.hash}`.replace("#", "");
      if (CATEGORIES_BREW_TIME[hash]) {
        teaType = hash as ITeaType;
        brewingTime = CATEGORIES_BREW_TIME[hash];
      }
    }
  });

  let counter = writable(0);
  let fill = false;

  function startFill() {
    counter.update((v) => v + 1);
    fill = true;
  }
  function resetButton() {
    console.log("on drain end");
    fill = false;
  }
</script>

<div class="wrapper">
  <div class="content flex flex-col items-center justify-center">
    <div class="flex flex-col">
      <!-- <h1 class="mb-8 ps-4 flex justify-center">Brewing counter</h1> -->

      <Water
        filling={fill}
        on:drain={resetButton}
        fillCount={$counter}
        {brewingTime}
        {teaType}
      />

      <p class="mb-4 p-4 flex flex-col justify-center items-center">
        {#if $counter}
          <div class="text-md text-center">
            {$_("fill")}
          </div>
          <div class="title text-2xl font-bold text-center">
            {$counter}
          </div>
        {/if}
      </p>

      <Button on:click={startFill} disabled={fill}>
        {fill ? $_("wait") : $_("start")}
      </Button>
    </div>
  </div>
</div>
