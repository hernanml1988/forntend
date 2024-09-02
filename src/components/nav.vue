<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light"> -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link class="navbar-brand"  to="/view/inicio">Iniico</router-link>
          <!-- <a class="navbar-brand" href="#">Agenda</a> -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">   </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Extensiones
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <!-- <li><router-link class="dropdown-item"  to="/view/inicio">Inico</router-link></li> -->
                  <li><router-link class="dropdown-item" to="/view/view-DataTable">Datatable</router-link></li>
                  <li><router-link class="dropdown-item" to="/extensiones/swetAlert2">Swet Alert 2</router-link></li>
                  <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                </ul>
              </li>
            </ul>
            <div class="d-flex navbar-nav mb-lg-0">
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Hernan Miranda
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
                      <li><a class="dropdown-item" href="#">Configuración</a></li>
                      <li><a class="dropdown-item" href="#">Otros</a></li>
                    </ul>
                  </div>
            </div>
          </div>
        </div>
      </nav>

      
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
};
</script>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
</style>