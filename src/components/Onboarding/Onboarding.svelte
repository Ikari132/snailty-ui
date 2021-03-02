<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import IoLogoApple from "svelte-icons/io/IoLogoApple.svelte";
  import IoIosArrowDown from "svelte-icons/io/IoIosArrowDown.svelte";

  import IoIosShare from "svelte-icons/io/IoIosShare.svelte";
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import MdAndroid from "svelte-icons/md/MdAndroid.svelte";
  import MdMoreHoriz from "svelte-icons/md/MdMoreHoriz.svelte";
  import MdScreenShare from "svelte-icons/md/MdScreenShare.svelte";
  import Icon from "@/components/Icon.svelte";
  import Card from "@/components/Card.svelte";
  import Button from "@/components/Button.svelte";

  const dispatch = createEventDispatcher();

  function finishHandler() {
    dispatch("onboardingEnd");
  }
</script>

<div class="onboarding">
  <h1 class="onboarding__header text-2xl">Welcome on Tea gallery</h1>

  <section class="onboarding__content">
    <h2 class="text-xl">You may use this site like an app</h2>

    <Card class="setup">
      <h2 class="setup__header">
        On iOS <Icon><IoLogoApple /></Icon>
      </h2>
      <Icon><IoIosArrowDown /></Icon>
      <div>Press share button <Icon><IoIosShare /></Icon></div>
      <div>
        Then press add to home screen button <Icon><IoIosAdd /></Icon>
      </div>
    </Card>

    <Card class="setup">
      <h2 class="setup__header">
        On Android <Icon><MdAndroid /></Icon>
      </h2>
      <Icon><IoIosArrowDown /></Icon>
      <div>Press menu button <Icon><MdMoreHoriz /></Icon></div>
      <div>
        Then press add to home screen button <Icon><MdScreenShare /></Icon>
      </div>
    </Card>
  </section>

  <div class="onboarding__controls">
    <Button on:click={finishHandler}>Finish</Button>
  </div>
</div>

<style lang="scss">
  .onboarding {
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100%;

    &__header {
      flex: 0 0 auto;
    }
    &__content {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &__controls {
      flex: 0 0 auto;
    }
  }
  :global(.setup) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .setup__header {
    font-size: 1.2em;
  }
</style>
