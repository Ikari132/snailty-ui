<script>
  import Button from "./../../components/Button.svelte";
  import { services } from "./../../api";
  import Icon from "../../components/Icon.svelte";
  import FaLeaf from "svelte-icons/fa/FaLeaf.svelte";
  import GoogleIcon from "../../components/GoogleIcon.svelte";
  import { authStore } from "@/stores/auth.store";
  import { redirect } from "@roxi/routify";

  function googleLoginHandler() {
    services.auth.google();
  }

  if ($authStore) {
    $redirect("/");
  }
</script>

<div>
  <div class="logo py-4">
    <Icon width={40} height={40} color="#009245">
      <FaLeaf />
    </Icon>
    <div class="title py-4 text-2xl">Tea gallery</div>
  </div>

  <Button on:click={googleLoginHandler} class="button--google">
    <Icon width={40} height={40} color="#009245">
      <GoogleIcon />
    </Icon>
    Sign in with Google
  </Button>
</div>

<style lang="scss">
  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    // [todo]
    padding-bottom: 200px;
  }

  :global(.button--google) {
    display: flex;
    align-items: center;

    background: #fff;
    color: #000;
    border: solid 1px #f2f2f2;
  }
</style>
