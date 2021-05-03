<script lang="ts">
  import { goto } from "@roxi/routify";
  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
  // import Button from "./../../../components/Button.svelte";
  import BrewingTimer from "../../../components/BrewingTimer.svelte";
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

  const brewCount = parseInt(localStorage.getItem("brew_count"));

  let counter = writable(brewCount || 0);
  let fill = false;

  let bellSound = new Audio();

  // onMount(() => {
  //   bellSound = new Audio("/bell.wav");
  // });

  function startFill() {
    if ($counter === 0) {
      bellSound.muted = false;
      bellSound.play();
    }
    counter.update((v) => v + 1);
    fill = true;
  }

  function endTimer() {
    localStorage.removeItem("brew_count");
    counter.update(() => 0);
    $goto("/");
  }

  function handleBrewingEnd() {
    if (bellSound?.play) {
      bellSound.src = "/bell.wav";
      bellSound.play();
    }

    if (window?.navigator?.vibrate) {
      window.navigator.vibrate([100, 20, 100, 20, 100, 20]);
    }
  }

  function handleDrainEnd() {
    fill = false;
  }

  $: {
    localStorage.setItem("brew_count", `${$counter}`);
  }
</script>

<div class="wrapper">
  <div class="content flex flex-col items-center justify-center">
    <div class="flex flex-col">
      <!-- <h1 class="mb-8 ps-4 flex justify-center">Brewing counter</h1> -->

      <BrewingTimer
        filling={fill}
        on:drainend={handleDrainEnd}
        on:brewingend={handleBrewingEnd}
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

      <button class="btn btn-primary" on:click={startFill} disabled={fill}>
        {fill ? $_("wait_brew") : $_("start_brew")}
      </button>

      {#if $counter >= 1}
        <br />
        <button class="btn btn-secondary" on:click={endTimer}
          >{$_("finish_brew")}</button
        >
      {/if}
      <!-- <Button on:click={startFill} disabled={fill}>
        {fill ? $_("wait") : $_("start")}
      </Button> -->
    </div>
  </div>
</div>
