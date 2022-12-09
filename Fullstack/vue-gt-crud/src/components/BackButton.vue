<template>
    <div class="ml-2">
      <!-- <button type="submit" class="btn btn-primary mt-3 mb-5 ">Back</button>  -->
      <router-link to="/" class="btn btn-primary mt-3 mb-5">Close</router-link>
    </div>
  </template>
  
  <script>
  export default {
      name: 'BackComponents',
      props: {
      msg: String
    }
  }
  </script>
  
  <style>
  
  </style>