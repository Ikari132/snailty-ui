<script lang="ts">
  import type { CreateTeaDto } from "./../../../api/src/tea/dto/create-tea.dto";
  import Button from "./Button.svelte";
  import { CustomInput, Form, Input, FormGroup, Label } from "sveltestrap";

  const tea: CreateTeaDto = {
    name: "",
    type: null,
    inStock: true,
    description: "",
    price: null,
  };

  function handleSubmit() {
    console.log("submit", tea);
  }
  function handleDiscard() {
    console.log("discard");
  }
  $: {
    console.log("teA", tea);
  }
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  <FormGroup>
    <Label>Name</Label>
    <Input type="text" bind:value={tea.name} />
  </FormGroup>

  <FormGroup>
    <Label>Type</Label>
    <Input type="text" bind:value={tea.name} />
  </FormGroup>

  <FormGroup>
    <Label>Type</Label>
    <CustomInput type="switch" id="inStock" name="inStock" />
  </FormGroup>

  <FormGroup>
    <Label>Custom Select</Label>
    <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
      <option value="">Select</option>
      <option>Value 1</option>
      <option>Value 2</option>
      <option>Value 3</option>
      <option>Value 4</option>
      <option>Value 5</option>
    </CustomInput>
  </FormGroup>
  <label class="form__label">
    Name
    <input class="form__input" type="text" bind:value={tea.name} />
  </label>
  <label>
    Type
    <select name="teaType" id="" bind:value={tea.type}>
      <option value="1">Shu</option>
      <option value="2">Shen</option>
      <option value="3">Green</option>
    </select>
  </label>
  <label>
    Description
    <textarea bind:value={tea.description} />
  </label>
  <label>
    Price
    <input type="number" bind:value={tea.price} />
  </label>
  <label>
    In stock
    <input type="checkbox" bind:checked={tea.inStock} />
  </label>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      id="flexSwitchCheckChecked"
      checked
    />
    <label class="form-check-label" for="flexSwitchCheckChecked"
      >Checked switch checkbox input</label
    >
  </div>
  <div class="controls">
    <Button on:click={handleDiscard}>Discard</Button>
    <Button type="submit">Save</Button>
  </div>
</form>

<style lang="scss">
  .form {
    padding: 15px;
    @extend .flex-column !optional;

    label {
      display: flex;
      flex-direction: column;
      margin: 5px 0;
    }
    input,
    textarea,
    select {
      border-radius: 4px;
      padding: 5px;
      border: solid 1px #a0a0a0;
    }

    .controls {
      @extend .flex-row !optional;
      justify-content: space-between;
    }
    &__label {
      display: flex;
      flex-direction: column;
    }
  }
</style>
