<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FaLeaf from "svelte-icons/fa/FaLeaf.svelte";
  import type { ITea } from "./../pages/types";
  import { CATEGORIES_COLOR } from "./../pages/constants";
  import Button from "./../components/Button.svelte";
  import RatingNumber from "./RatingNumber.svelte";
  import BrewsCount from "./BrewsCount.svelte";
  import Icon from "./Icon.svelte";

  export let tea: ITea;
  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch("select", tea);
  }
</script>

<div
  class="tea-card flex flex-col items-start justify-start rounded-xl shadow p-4 {$$props.class}"
>
  <div class="flex justify-end w-full">
    <Icon color={CATEGORIES_COLOR[tea.type.toUpperCase()]}>
      <FaLeaf />
    </Icon>
  </div>
  <h2 class="text-lg font-bold flex justify-between w-full pb-4">
    {tea.name}
  </h2>
  {#if tea.rating}
    <div class="flex justify-center items-center w-full">
      <RatingNumber rating={tea.rating} />
      <BrewsCount />
    </div>
    {#if tea.tasteProfile}
      <div class="flex items-center justify-center w-full py-6">
        {#each tea.tasteProfile as tasteProfile}
          <div class="flex flex-col items-center justify-center px-2">
            <Icon>
              <FaLeaf />
            </Icon>
            {tasteProfile.type}
          </div>
        {/each}
      </div>
      <Button on:click={clickHandler} fullWidth>Brew</Button>
    {/if}
  {:else}
    <Button on:click={clickHandler} fullWidth>Brew and rate</Button>
  {/if}
</div>

<style lang="scss">
  .tea-card {
    min-height: 250px;
    min-width: 200px;

    // height: 300px;
    width: 200px;

    background: var(--card-background);
    color: var(--font-color);

    padding: 20px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
</style>
