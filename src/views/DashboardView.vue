<template>
  <dashboard />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Dashboard from '../components/Dashboard.vue'

  export default Vue.extend({
    name: 'DashboardView',

    components: {
      Dashboard,
    },
  })
</script>

<style>
