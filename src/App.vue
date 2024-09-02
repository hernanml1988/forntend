<template>  
  <div style="width: 100%;">

    <router-view></router-view>
  </div>
</template>

<script>
import Login from './view/login.vue'


export default {
  
  data() {
    return {
      parentData: 'Hello from parent'
    };
  },
  created() {
        // Redirige a la ruta deseada cuando la aplicación se inicia
        this.$router.push('/login');
    },
};
</script>

<style>

</style>