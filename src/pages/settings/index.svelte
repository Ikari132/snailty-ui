<script lang="ts">
  import { redirect } from "@roxi/routify";

  import { services } from "../../api";
  import Page from "../../components/Page.svelte";
  import { authStore } from "../../stores/auth.store";
  import Button from "./../../components/Button.svelte";

  async function handleLogout() {
    const res = await services.auth.logout();
    if (res.res.ok) {
      authStore.logout();
      services.auth.resetToken();
      $redirect("/auth/login");
    }
  }
</script>

{#if $authStore}
  <Page>
    <div slot="header" class="py-4">Settings</div>

    <div slot="content">
      <section class="user">
        <div class="avatar">
          <img class="avatar__img" src={$authStore.picture} alt="user" />
        </div>
        <div class="name-wrapper">
          <div class="name">
            <div class="name__first">{$authStore.firstName}</div>
            <div class="name__last">{$authStore.lastName}</div>
          </div>
          <div class="logout">
            <Button on:click={handleLogout}>Logout</Button>
          </div>
        </div>
      </section>
    </div>
  </Page>
{/if}

<style lang="scss">
  .user {
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .avatar {
    padding-right: 20px;

    &__img {
      width: 150px;
      height: 150px;
      user-select: none;
      background-color: #f2f2f2;
      border-radius: 50%;
    }
  }
  .name-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .name {
    display: flex;
    font-weight: bold;
    padding-bottom: 20px;
    &__first,
    &__last {
      padding-right: 5px;
    }
  }
</style>
