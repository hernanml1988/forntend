<template>
    <div class="card">
        <h1>Login</h1>
        <div class="row d-flex g-3">
            <div class="col-md-12">
                <label for="">Usuario</label>
                <input type="text" class="form-control" v-model="form.username">
                <div class="alert alert-danger mt-2" role="alert" v-if="errors.noUsername">
                    Debe ingresar usuario.
                </div>
            </div>
            <div class="col-md-12">
                <label for="">Contraseña</label>
                <input type="password" class="form-control" v-model="form.password">
                <div class="alert alert-danger mt-2" role="alert" v-if="errors.noPas">
                    Debe ingresar contraseña.
                </div>
            </div>
            <div class="col-md-12">
                <div class="alert alert-danger mt-2" role="alert" v-if="errors.incorrectData">
                    Credenciales incorectas, intentelo de nuevo.
                </div>
                <button class="btn btn-primary" @click="login">Ingresar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { backend } from '../config/load'
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    //recibimos la variable del componente padre
    props: {

    },
    data() {
        return {
            backend,
            form: {
                username: '',
                password: ''
            },
            errors: {
                noPas: false,
                noUsername: false,
                incorrectData: false,
            }
        };
    },
    created() {
        // Asignar el valor de la prop a la variable local

    },
    methods: {
        async login() {
            this.errors.incorrectData = false
            if (this.validateError()) {
                return
            }
            axios.post(`${backend}/auth/login`, {
                "username": this.form.username,
                "password": this.form.password

            })
                .then(response => {
                    console.log('Datos protegidos:', response.data);
                    this.$router.push('/view/inicio');
                })
                .catch(error => {
                    if (error.response?.data?.statusCode == 401) {
                        this.errors.incorrectData = true;
                    } else {
                        Swal.fire({
                            title: '¡Oops, ha ocurrido un error',
                            text: `Ha ocurrido un error, consulte con su administrador.`,
                            icon: 'error',
                        });
                    }
                });
        },
        validateError() {
            this.errors.noPas = false
            this.errors.noUsername = false
            if (this.form.username == '' && this.form.password == '') {
                this.errors.noUsername = true
                this.errors.noPas = true
                return true
            }
            if (this.form.username == '') {
                this.errors.noUsername = true
                return true
            }
            if (this.form.password == '') {
                this.errors.noPas = true
                return true
            }
        },
    },

    mounted() {
        console.log(this.backend)
    },
    beforeUnmount() {

    }
};
</script>

<style scoped></style>