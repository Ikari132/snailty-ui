<script lang="ts">
  import * as yup from "yup";
  import { Form } from "@/components/Form";
  import Page from "@/components/Page.svelte";

  const config = [
    {
      type: "text",
      name: "name",
      label: "Name",
      rule: yup.string().required("Please add Name"),
    },
    {
      type: "textarea",
      name: "description",
      label: "Description",
      rule: yup.string(),
    },
    {
      type: "select",
      name: "type",
      label: "Type",
      options: [
        { id: "0", name: "GREEN" },
        { id: "1", name: "RED" },
        { id: "2", name: "WHITE" },
        { id: "3", name: "JAPANESE" },
        { id: "4", name: "SHU" },
        { id: "5", name: "SHEN" },
        { id: "6", name: "OOLONG" },
        { id: "7", name: "OTHERS" },
        { id: "8", name: "MATE" },
        { id: "9", name: "BLACK" },
      ],
      rule: yup.string().required("Please select type"),
    },
  ];

  function handleSubmit({ detail: values }) {
    console.log("submit", values);
  }
</script>

<Page>
  <div slot="header">
    <div class="py-4">Add new tea</div>
  </div>
  <div slot="content">
    <Form {config} on:submit={handleSubmit} />
  </div>
</Page>

<style lang="scss">
</style>
