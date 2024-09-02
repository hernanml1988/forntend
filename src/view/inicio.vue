<template>
    <div class="body-view">
        <Nav/>
        <h1>hola</h1>
  
  
    </div>
  </template>
  
  <script>
  import Nav from '../components/nav.vue'
  export default {
    components:{Nav},
    data() {
      return {
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  .body-view {
    position: fixed;
    padding: 5rem;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  </style>