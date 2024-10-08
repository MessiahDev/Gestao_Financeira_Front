import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import AdministracaoView from '../views/AdministracaoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/administracao',
    name: 'Administracao',
    component: AdministracaoView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
