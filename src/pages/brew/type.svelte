<script>
  import Card from "../../components/Card.svelte";
  import { CATEGORIES_MAP, CATEGORIES_COLOR } from "../constants";
  const categories = Object.keys(CATEGORIES_MAP);
</script>

<div class="wrapper">
  <div class="content flex flex-col items-center p-4">
    <!-- <div class="flex flex-wrap justify-center w-full overflow-hidden"> -->
    <h1 class="py-4 text-2xl">Choose tea type</h1>
    <div class="grid grid-cols-3 gap-4 items-center justify-center">
      {#each categories as category}
        <a href="/brew/timer#{category}">
          <Card
            class="w-full"
            style="background:{CATEGORIES_COLOR[category]};color:#fff;"
          >
            <h2 class="text-md">{category}</h2>
          </Card>
        </a>
      {/each}
    </div>
  </div>
</div>
