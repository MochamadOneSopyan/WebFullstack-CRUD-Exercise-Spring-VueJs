<template>
  <div>
    <Header></Header>
    <AddButton></AddButton>
    <Card></Card> <Copyright></Copyright>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AddButton from "../components/AddButton.vue";
import Card from "../components/Card.vue";
import Copyright from "../components/Copyright.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    AddButton,
    Card,
    Copyright,
  },
};
</script>

<style></style>
