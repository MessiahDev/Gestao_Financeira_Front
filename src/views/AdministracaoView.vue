<template>
    <administracao />
  </template>
  
  <script lang="ts">
    import Vue from 'vue'
    import Administracao from '../components/Administracao.vue'
  
    export default Vue.extend({
      name: 'AdministracaoView',
  
      components: {
        Administracao,
      },
    })
  </script>
  
  <style></style>