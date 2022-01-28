import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/slc',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutSlc.vue')
  },
  {
    path: '/program/coding',
    name: 'CodingProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/coding-program.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
