<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FaLeaf from "svelte-icons/fa/FaLeaf.svelte";
  import FaWeightHanging from "svelte-icons/fa/FaWeightHanging.svelte";
  import GiBerriesBowl from "svelte-icons/gi/GiBerriesBowl.svelte";
  import FaDollarSign from "svelte-icons/fa/FaDollarSign.svelte";
  import FaStar from "svelte-icons/fa/FaStar.svelte";
  import GiWaterDrop from "svelte-icons/gi/GiWaterDrop.svelte";
  import type { ITea } from "./../pages/types";
  import { CATEGORIES_COLOR } from "./../pages/constants";
  import Button from "./../components/Button.svelte";
  import RatingNumber from "./RatingNumber.svelte";
  import BrewsCount from "./BrewsCount.svelte";
  import Icon from "./Icon.svelte";
  import Badge from "./Badge.svelte";

  export let tea: ITea;
  const dispatch = createEventDispatcher();

  function clickHandler() {
    dispatch("select", tea);
  }
</script>

<div
  class="tea-card flex flex-col items-start justify-start rounded-xl shadow p-4 {$$props.class}"
>
  <!-- <div class="flex justify-end w-full">
    <Icon color={CATEGORIES_COLOR[tea.type.toUpperCase()]}>
      <FaLeaf />
    </Icon>
  </div> -->
  <h2 class="text-2xl font-bold flex justify-between w-full pb-2">
    {tea.name}
  </h2>
  {#if tea.rating}
    <div class="flex justify-center items-center w-full">
      <!-- <RatingNumber rating={tea.rating} /> -->
      <Badge icon={FaStar} background="transparent">{tea.rating}</Badge>
      <Badge icon={GiBerriesBowl} background="transparent"
        >{tea.brewCount}</Badge
      >
      <Badge icon={FaWeightHanging} background="transparent">{tea.amount}</Badge
      >
      <Badge icon={FaDollarSign} background="transparent"
        >{tea.price}$/50g</Badge
      >
    </div>
    <div class="py-2">
      <Badge icon={FaLeaf} iconColor={CATEGORIES_COLOR[tea.type.toUpperCase()]}>
        {tea.type}
      </Badge>
    </div>

    {#if tea.tasteProfile}
      <div class="flex items-center justify-start w-full py-2">
        {#each tea.tasteProfile as tasteProfile}
          <Badge
            icon={GiWaterDrop}
            iconColor={CATEGORIES_COLOR[tea.type.toUpperCase()]}
            background="transparent"
          >
            {tasteProfile.type}
          </Badge>
        {/each}
      </div>
      <Button class="mt-4" on:click={clickHandler} fullWidth>Brew</Button>
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
    width: 300px;

    background: var(--card-background);
    color: var(--font-color);

    padding: 20px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
</style>
