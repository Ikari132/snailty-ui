<script lang="ts">
  import { goto } from "@roxi/routify";
  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
  // import Button from "./../../../components/Button.svelte";
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

  const brewCount = parseInt(localStorage.getItem("brew_count"));

  let counter = writable(brewCount || 0);
  let fill = false;

  let bellSound;
  // let audio;
  onMount(() => {
    bellSound = document.createElement("audio");
    bellSound.src = "bell.wav";

    // audio = new Audio("bell.wav");
  });

  function startFill() {
    console.log("here");
    bellSound.play();
    // audio.play();
    counter.update((v) => v + 1);
    fill = true;
  }

  function endTimer() {
    localStorage.removeItem("brew_count");
    counter.update(() => 0);
    $goto("/");
  }

  const vibrate = window?.navigator?.vibrate;

  function resetButton() {
    console.log("on drain end");
    fill = false;

    console.log("bell", bellSound);
    if (bellSound?.play) {
      bellSound.play();
    }
    if (vibrate) {
      vibrate([100, 20, 100, 20, 100, 20]);
    }
  }
  $: {
    console.log($counter, "coutn");
    localStorage.setItem("brew_count", `${$counter}`);
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

      <button class="btn btn-primary" on:click={startFill} disabled={fill}>
        {fill ? $_("wait") : $_("start")}
      </button>

      {#if $counter >= 1}
        <br />
        <button class="btn btn-secondary" on:click={endTimer} disabled={fill}>
          End
        </button>
      {/if}
      <!-- <Button on:click={startFill} disabled={fill}>
        {fill ? $_("wait") : $_("start")}
      </Button> -->
    </div>
  </div>
</div>
