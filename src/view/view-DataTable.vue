<script>
import DataTable from '../components/extensiones/datatable.vue';
import Nav from '../components/nav.vue'
export default {
    components: { DataTable, Nav },
    data() {
        return {
        }
    }
}
</script>
<template>
    <div class="container mt-5">

        <h1>DataTable</h1>
        <div class="card">
                <DataTable />

        </div>
    </div>
</template>



<style scoped>
/* Estilos adicionales si es necesario */
</style>