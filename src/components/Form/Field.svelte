<script lang="ts">
  import { getContext } from "svelte";

  import { Input, FormGroup, Label, FormText, CustomInput } from "sveltestrap";

  export let label;
  export let name;
  export let type;
  export let options: { name: string; id: string }[] = null;

  export let id = `uid_${new Date().valueOf()}`;

  const errors = getContext<any>("formErrors");
  const values = getContext<any>("formValues");

  $: {
    // console.log("err", $errors, $errors[name]);
  }
</script>

<FormGroup>
  <Label for={id}>{label}</Label>
  {#if type === "select"}
    <CustomInput
      {type}
      {id}
      {name}
      bind:value={$values[name]}
      invalid={!!$errors[name]}
    >
      <option />
      {#each options as option}
        <option value={option.id}>{option.name}</option>
      {/each}
    </CustomInput>
  {:else}
    <Input
      {id}
      {name}
      {type}
      bind:value={$values[name]}
      invalid={!!$errors[name]}
    />
  {/if}
  {#if $errors[name]}
    <FormText color="danger">
      {$errors[name].message}
    </FormText>
  {/if}
</FormGroup>
