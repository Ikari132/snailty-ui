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
      authStore.set(user);
      $goto("/");
    })
    .catch((res) => {
      console.log("auth error", res);
    });
</script>