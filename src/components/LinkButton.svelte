<script lang="ts">
  export let href: string;
</script>

<a {href}>
  <button
    class="px-4 py-2 text-md text-white bg-blue-500 rounded cursor-pointer select-none hover:bg-blue-600 active:bg-blue-700">
    <slot />
  </button>
</a>
