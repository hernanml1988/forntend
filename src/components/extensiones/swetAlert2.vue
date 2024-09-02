<template>
  <div class="container-swet-alert m-5">
    <h1>Swet Alert 2</h1>
    <div class="row m-4 d-flex justify-content-center align-items-center gap-3 container-buttons">
      <div class="col-md-3">
        <button class="btn btn-primary" @click="showAlert">Alerta</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="basicMessage">Mensaje Basico</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="footer">Alerta con footer</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="alertWithHtml">Alerta con HTML</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="alertWithButtonConfirm">Alerta con Confirmación</button>
      </div>
      <div class="col-md-3">
        <button class="btn btn-primary" @click="alertWithTimer">Alerta con Tiempo</button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
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
    showAlert() {
      Swal.fire({
        title: 'Hello!',
        text: 'This is a SweetAlert2 alert',
        icon: 'success',
        confirmButtonText: 'Cool'
      });
    },
    basicMessage() {
      Swal.fire("SweetAlert2 is working!");
    },
    footer() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    },
    alertWithHtml() {
      Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html: `
          You can use <b>bold text</b>,
          <a href="#" autofocus>links</a>,
          and other HTML tags
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          Cancel
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    alertWithButtonConfirm() {
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    },
    alertWithTimer(){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
};
</script>

<style scoped>
.container-swet-alert {
  position: fixed;
  top: 3rem;
}
.container-buttons{
  padding: 2rem;
  box-shadow: 3px 5px 7px 2px grey
}
</style>