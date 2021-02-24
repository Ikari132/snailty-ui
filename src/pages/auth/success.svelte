<script>
  import { services } from "./../../api";
  import { goto } from "@roxi/routify";
  import { authStore } from "./../../stores/auth.store";

  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.getAll("token")[0];

  services.auth.updateToken(token);

  const userReq = services.auth.user();
  userReq
    .then(({ data: user }) => {
      console.log("get user success", user);
      authStore.set(user);
      $goto("/");
    })
    .catch((res) => {
      console.log("auth error", res);
    });
</script>

<!-- <div class="wrapper">
  <div class="content">
    <div class="title py-4">
      <a href="api/auth/logout">
        <Button>Logout</Button>
        {token}
      </a>
    </div>
  </div>
</div> -->
