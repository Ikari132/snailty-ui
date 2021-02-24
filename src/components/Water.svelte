<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { CATEGORIES_COLOR } from "../pages/constants";
  import type { ITeaType } from "../pages/types";
  import Bar from "./Bar.svelte";
  export let filling = false;
  export let brewingTime = 10;
  export let teaType: ITeaType;
  export let fillCount = 1;

  $: nextBrewingTime = brewingTime;

  const dispatch = createEventDispatcher();

  $: {
    console.log("filling changed", filling, "next brew time", nextBrewingTime);
    // will only get called when the `color` changed.
    if (filling) {
      currentState = "filling";
      filling = false;
      nextBrewingTime = brewingTime + (fillCount - 1) * 2;
      console.log("nextBrewingTime", nextBrewingTime, brewingTime, fillCount);
      if (document) {
        const root = document.documentElement;
        root.style.setProperty("--brewing-duration", `${nextBrewingTime}s`);

        const teaColor = CATEGORIES_COLOR[teaType];
        if (teaColor) {
          root.style.setProperty("--tea-color", `${teaColor}`);
        }
      }
    }
  }

  let percents = 0;
  let currentState: "brewing" | "filling" | "draining";
  function OnFillingEnd(e: AnimationEvent) {
    e.stopPropagation();
    if (currentState !== "draining") {
      console.log("filling end", currentState);
      currentState = "brewing";
    } else {
      dispatch("drain");
    }
  }

  function OnBrewingEnd(e: AnimationEvent) {
    e.stopPropagation();
    console.log("brewing end", currentState, e);
    currentState = "draining";
  }
</script>

<div class="glass">
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    style="display: none;">
    <symbol id="wave">
      <path
        d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
      />
      <path
        d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
      />
      <path
        d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
      />
      <path
        d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
      />
    </symbol>
  </svg>
  <div
    class="box"
    class:filling={currentState === "filling"}
    class:brewing={currentState === "brewing"}
    class:draining={currentState === "draining"}
    on:animationend={OnBrewingEnd}
  >
    <Bar timeLimit={nextBrewingTime} start={currentState === "brewing"} />

    <div id="water" class="water" on:animationend={OnFillingEnd}>
      <svg viewBox="0 0 560 20" class="water_wave water_wave_back">
        <use xlink:href="#wave" />
      </svg>
      <svg viewBox="0 0 560 20" class="water_wave water_wave_front">
        <use xlink:href="#wave" />
      </svg>
    </div>
  </div>
</div>

<style lang="scss">
  :root {
    --brewing-duration: 1s;
    --filling-duration: 5s;

    --tea-color: maroon;
  }

  $bgColor: rgba(2, 4, 56, 0.7);
  //   $boxColor: rgba(2, 4, 56, 0.3);

  $waterFColor: #4d6de3;
  $waterBColor: #c7eeff;

  .glass *,
  .glass *:before,
  .glass *:after {
    box-sizing: border-box;
    outline: none;
  }
  .glass {
    background: $bgColor;
    font: 14px/1 "Open Sans", helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;

    position: relative;
    width: 280px;
    height: 280px;
    border-radius: 50%;
  }
  .box {
    height: 280px;
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background: $bgColor;
    background: transparent;
    border-radius: 100%;
    overflow: hidden;

    &.filling {
      .water {
        animation: filling var(--filling-duration) ease-out forwards;
      }
    }
    &.draining {
      .water {
        background-color: var(--tea-color);
        animation: draining var(--filling-duration) ease-out forwards;
      }
      .water_wave_front {
        fill: var(--tea-color);
      }
    }
    &.brewing {
      background: #4d6de3;
      animation: brewing var(--brewing-duration) ease-out forwards;
    }

    .water {
      position: absolute;
      left: 0;
      top: 30px;
      z-index: 2;
      width: 100%;
      height: 100%;
      transform: translate(0, 100%);
      background: $waterFColor;
      transition: all 0.3s;

      // &.filling {
      //     animation: filling 5s ease-out forwards;
      // }

      // &.brewing {
      //     animation: brewing 5s ease-out forwards;
      // }

      &_wave {
        width: 200%;
        position: absolute;
        bottom: 100%;

        &_back {
          right: 0;
          fill: $waterBColor;
          animation: wave-back 1.4s infinite linear;
        }
        &_front {
          left: 0;
          fill: $waterFColor;
          margin-bottom: -1px;
          animation: wave-front 0.7s infinite linear;
        }
      }
    }
  }

  @keyframes brewing {
    0% {
      background-color: $waterFColor;
    }
    100% {
      background-color: var(--tea-color);
    }
  }
  @keyframes filling {
    0% {
      top: 0;
    }
    100% {
      top: -280px;
    }
  }
  @keyframes draining {
    0% {
      top: -280px;
    }
    100% {
      top: 30px;
    }
  }
  @keyframes wave-front {
    100% {
      transform: translate(-50%, 0);
    }
  }

  @keyframes wave-back {
    100% {
      transform: translate(50%, 0);
    }
  }
</style>
