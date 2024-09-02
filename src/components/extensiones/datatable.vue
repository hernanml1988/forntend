<template>
  <div class="">
    <div class="row">
      <DataTable :data="products" :columns="columns" class="table table-striped table-bordered display"
              :options="options">
              <thead>
                <tr>
                  <th>#</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                  <th>NOMBRE</th>
                  <th>DESCRIPCIÓN</th>
                  <th>PRECIO</th>
                </tr>
              </thead>
            </DataTable>
    </div>



  </div>
</template>

<script>
import DataTable from 'datatables.net-vue3'
import DataTableLib from 'datatables.net-bs5'
import Buttons from 'datatables.net-buttons-bs5'
import buttonsHtml5 from 'datatables.net-buttons/js/buttons.html5'
import print from 'datatables.net-buttons/js/buttons.print'
import pdfmake from 'pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import 'datatables.net-responsive-bs5'
import 'datatables.net-responsive-dt/css/responsive.dataTables.css';
import JsZip from 'jszip'
window.JsZip = JsZip
DataTable.use(DataTableLib)
DataTable.use(pdfmake)
DataTable.use(buttonsHtml5)

export default {
  components: { DataTable },
  data() {
    return {
      products: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'www', 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'www', 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'www', 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'www', 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
      // products: null,
      options: {
        paging: true,
        searching: true,
        ordering: true,
        responsive: true,
        scrollY: '', // Deshabilitar desplazamiento vertical
        scrollX: '', // Deshabilitar desplazamiento horizontal
        language: {
          decimal: ",",
          thousands: ".",
          info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
          infoEmpty: "Mostrando 0 a 0 de 0 entradas",
          infoFiltered: "(filtrado de _MAX_ entradas totales)",
          lengthMenu: "Mostrar _MENU_ entradas",
          loadingRecords: "Cargando...",
          processing: "Procesando...",
          search: "Buscar:",
          zeroRecords: "No se encontraron registros coincidentes",
          paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior",
          },
          aria: {
            sortAscending: ": activar para ordenar la columna de manera ascendente",
            sortDescending: ": activar para ordenar la columna de manera descendente",
          },
        },
      },
    }
  }
}
</script>

<style scoped>
/* Estilos adicionales si es necesario */

</style>