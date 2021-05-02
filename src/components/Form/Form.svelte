<script lang="ts">
  // import type { CreateTeaDto } from "./../../../../api/src/tea/dto/create-tea.dto";
  import Button from "@/components/Button.svelte";
  import Field from "./Field.svelte";

  import * as yup from "yup";
  import { writable } from "svelte/store";
  import { createEventDispatcher, setContext } from "svelte";

  export let config = [];

  let initialErrors = {};
  let errors = writable(initialErrors);
  setContext("formErrors", errors);

  let values = writable(
    config.reduce((acc, field) => {
      acc[field.name] = field.value || null;
      return acc;
    }, {})
  );
  setContext("formValues", values);

  const shape = config.reduce((acc, field) => {
    acc[field.name] = field.rule;
    return acc;
  }, {});
  let schema = yup.object().shape(shape);
  const extractErrors = ({ inner }) => {
    return inner.reduce((acc, err) => {
      return { ...acc, [err.path]: { ...err } };
    }, {});
  };

  function validate() {
    return new Promise((res, rej) => {
      schema
        .validate($values, { abortEarly: false })
        .then((values) => {
          $errors = {};
          res(values);
        })
        .catch((err) => {
          $errors = extractErrors(err);
          console.log("errors", $errors);
          // rej($errors);
        });
    });
  }
  const dispatch = createEventDispatcher();

  function handleSubmit() {
    validate().then((values) => {
      dispatch("submit", values);
    });
  }
  function handleDiscard() {
    console.log("discard");
  }

  let isInit = true;
  values.subscribe((v) => {
    if (!isInit) {
      console.log("subscrite in form", v);
      validate();
    } else {
      isInit = false;
      console.log("here");
    }
  });
</script>

<form class="form" on:submit|preventDefault={handleSubmit}>
  {#each config as field}
    <Field
      name={field.name}
      type={field.type}
      label={field.label}
      options={field?.options}
    />
  {/each}

  <!-- <Field name="name" type="text" label="Name" />
  <Field name="description" type="textarea" label="Description" />

  <Field name="type" type="select" label="Type" options={teaTypes} /> -->

  <div class="controls">
    <!-- <Button on:click={handleDiscard}>Discard</Button> -->
    <Button type="submit">Save</Button>
  </div>
</form>

<style lang="scss">
  .form {
    padding: 15px;
  }
</style>
