<script>
import Login from '../components/loginForm.vue'

export default {
    components:{Login},
    data() {
        return {
        }
    }
}
</script>
<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <div class="row">
                <Login/>

            </div>
        </div>
    </div>
</template>



<style scoped>
/* Estilos adicionales si es necesario */
.body-view {
    position: fixed;
    padding: 5rem;
    top: 1rem;
    width: 100%;
    max-height: 600px;
}
</style>