<!-- <script context="module" ✂prettier:content✂="CiAgaW1wb3J0IHsgc2VydmljZXMgfSBmcm9tICIuL2FwaSI7CiAgaW1wb3J0IHsgYXV0aFN0b3JlIH0gZnJvbSAiLi9zdG9yZXMvYXV0aC5zdG9yZSI7CgogIHNlcnZpY2VzLmF1dGgKICAgIC51c2VyKCkKICAgIC50aGVuKCh7IHVzZXIgfSkgPT4gewogICAgICBhdXRoU3RvcmUuc2V0KHVzZXIpOwogICAgfSkKICAgIC5jYXRjaCgoKSA9PiB7fSk7Cg==" ✂prettier:content✂="e30=">{}</script> -->
<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import GlobalStyles from "./components/GlobalStyles.svelte";
  import { setupI18n } from "./i18n";
  setupI18n();
</script>

<GlobalStyles />
<Router {routes} />

<style global>
</style>
