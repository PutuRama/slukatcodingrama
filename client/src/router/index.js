import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress';

import '../../node_modules/nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/slc',
    name: 'AboutSlc',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutSlc.vue')
  },
  {
    path: '/program',
    name: 'OurProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/OurProgram.vue')
  },
  {
    path: '/program/english',
    name: 'EnglishProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/english-program.vue')
  },
  {
    path: '/program/agriculture',
    name: 'AgricultureProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/agriculture-program.vue')
  }, {
    path: '/program/coding',
    name: 'CodingProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/coding-program.vue')
  }, {
    path: '/program/enterprenuer',
    name: 'EnterprenuerProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/enterprenuer-program.vue')
  },
  {
    path: '/about/student',
    name: 'AboutStudent',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentPage.vue')
  }, {
    path: '/activities',
    name: 'Activities',
    component: () => import(/* webpackChunkName: "about" */ '../views/activities.vue')
  }, {
    path: '/about/volounteer',
    name: 'AboutVolunteer',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutVolunteer.vue')
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import(/* webpackChunkName: "about" */ '../views/UnderContruct.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
  }
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
