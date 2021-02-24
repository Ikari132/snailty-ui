<script lang="ts">
  import LinkButton from "./../../../components/LinkButton.svelte";
  import { _ } from "svelte-i18n";
  let amount = 5;
  let temperature = 90;
</script>

<div class="wrapper">
  <div class="content title">
    <h1 class="title mb-8 ps-4 flex justify-center">
      {$_("prepare_for_brewing")}
    </h1>

    <h2 class="mb-8 ps-4 flex justify-center">{$_("add")}</h2>
    <div
      class="flex items-center justify-center m-2 p-4 text-xl rounded shadow select-none"
    >
      {amount}g
    </div>
    of tea to your pot and prerape water with temperature of
    <div
      class="flex items-center justify-center m-2 p-4 text-xl rounded shadow select-none"
    >
      {temperature}°C
    </div>
    <LinkButton href="/brew/timer">Next</LinkButton>
  </div>
</div>
