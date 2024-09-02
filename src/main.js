import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'; // Importa el router

const app = createApp(App);
app.use(router); // Usa el router
app.mount('#app');


