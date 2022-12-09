<template>
    <div>
      <Header></Header>
      <BackButton></BackButton>
      <Form></Form>
      <SuccessForm class="d-none"></SuccessForm>
      <Copyright></Copyright>
    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue'
  import BackButton from '../components/BackButton.vue'
  import Form from '../components/Form.vue'
  import SuccessForm from '../components/SuccessForm.vue'
  import Copyright from '../components/Copyright.vue'
  
  export default {
      name: 'UpdatePage',
      components: {
      Header,
      BackButton,
      Form,
      SuccessForm,
      Copyright,
    }
  }
  </script>
  
  <style>
  
  </style>