<template>
  <div>
    {{ localData }}
  </div>
</template>

<script>
export default {
  //recibimos la variable del componente padre
  props: {
    myProp: String
  },
  data() {
    return {
      localData: ''
    };
  },
  created() {
    // Asignar el valor de la prop a la variable local
    this.localData = this.myProp;
  },
  methods: {
    
  },
  mounted() {
   
  },
  beforeUnmount() {
    
  }
};
</script>

<style scoped>

    
</style>