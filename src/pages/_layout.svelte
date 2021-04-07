<!-- routify:options preload="proximity" -->
<script lang="ts">
  import { goto } from "@roxi/routify";
  import FaSync from "svelte-icons/fa/FaSync.svelte";

  import Navbar from "@/components/Navbar.svelte";
  import { services } from "@/api";
  import Icon from "@/components/Icon.svelte";
  import Onboarding from "@/components/Onboarding/Onboarding.svelte";
  import { authStore } from "@/stores/auth.store";

  const userReq = services.auth.user();
  userReq
    .then(({ data: user }) => {
      authStore.set(user);
    })
    .catch(() => {
      services.auth.resetToken();
    });

  function handleOnboardingEnd() {
    authStore.update((user) => ({ ...user, needOnboarding: false }));
  }
</script>

<main>
  {#await userReq}
    <div class="loading">
      Loading...
      <Icon loading>
        <FaSync />
      </Icon>
    </div>
  {:then}
    <!-- {#if true} -->
    {#if $authStore && $authStore.needOnboarding}
      <Onboarding on:onboardingEnd={handleOnboardingEnd} />
    {:else}
      <slot />
      <Navbar />
    {/if}
  {:catch}
    {$goto("/auth/login")}
  {/await}
</main>

<style lang="scss">
  main {
    position: relative;
    width: 100%;
    min-height: 100%;
    height: 100%;
    max-height: 100%;
    overflow: auto;

    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .loading {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 2em;
  }
</style>
