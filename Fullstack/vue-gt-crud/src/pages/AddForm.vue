<template>
  <div>
    <Header></Header>
    <BackButton></BackButton>
    <Form></Form>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BackButton from "../components/BackButton.vue";
import Form from "../components/Form.vue";
import Copyright from "../components/Copyright.vue";

export default {
  name: "FormPage",
  components: {
    Header,
    BackButton,
    Form,
    Copyright,
  },
};
</script>

<style></style>
