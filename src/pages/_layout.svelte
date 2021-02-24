<!-- routify:options preload="proximity" -->
<script lang="ts">
  import { goto } from "@roxi/routify";
  import FaSync from "svelte-icons/fa/FaSync.svelte";

  import Navbar from "@/components/Navbar.svelte";
  import { services } from "@/api";
  import Icon from "@/components/Icon.svelte";
  import { authStore } from "@/stores/auth.store";

  const userReq = services.auth.user();
  userReq
    .then(({ data: user }) => {
      authStore.set(user);
    })
    .catch(() => {
      services.auth.resetToken();
    });
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
    <slot />
    <Navbar />
  {:catch}
    {$goto("/auth/login")}
  {/await}
</main>

<style lang="scss">
  main {
    position: relative;
    max-width: 56em;
    min-height: 100%;
    height: 100%;
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
