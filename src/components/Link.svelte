<script lang="ts">
  export let external = false;
  export let href: string;
</script>

<a {href} rel={external ? "external" : ""} {...$$restProps}>
  <slot />
</a>
