import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
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
    path: '/return-conditions',
    name: 'return-conditions',
    component: () => import('@/views/ReturnConditions.vue')
  },
  {
    path: '/payment-conditions',
    name: 'payment-conditions',
    component: () => import('@/views/PaymentConditions.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
