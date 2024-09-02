import { createRouter, createWebHistory } from 'vue-router';
import Datatable from '../components/extensiones/datatable.vue';
import SwetAlert2 from '../components/extensiones/swetAlert2.vue';
import ViewDataTable from '../view/view-DataTable.vue';
import ViewInicio from '../view/inicio.vue'
import Login from '../view/login.vue'

const routes = [
  { path: '/extensiones/datatable', component: Datatable },
  { path: '/extensiones/swetAlert2', component: SwetAlert2 },
  { path: '/view/view-DataTable', component: ViewDataTable },
  { path: '/view/inicio', component: ViewInicio },
  { path: '/login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;