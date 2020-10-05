import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  },
  {

    path: '/vacuumators',
    name: 'vacuumators',
    component: () => import('@/views/Vacuumators.vue')
  },
  {
    path: '/dosators',
    name: 'dosators',
    component: () => import('@/views/Dosators.vue')
  },
  {
    path: '/payment-conditions',
    name: 'PaymentConditions',
    component: () => import('@/views/PaymentConditions.vue')
  },
  {
    path: '/return-conditions',
    name: 'ReturnConditions',
    component: () => import('@/views/ReturnConditions.vue')
  },
  {
    path: '/*',
    name: '404',
    component: () => import('@/views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
