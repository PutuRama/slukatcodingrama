import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress';

import '../../node_modules/nprogress/nprogress.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Slukat Learning Center',
      metaTags: [
        {
          name: 'description',
          content: 'Home for learning and saving environment'
        },
        {
          property: 'og:description',
          content: 'Home for learning and saving environment'
        }
      ]
    }
  },
  {
    path: '/about/slc',
    name: 'AboutSlc',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutSlc.vue'),
    meta: {
      title: 'About SLC',
      metaTags: [
        {
          name: 'description',
          content: 'SLC is Foundation base in Bali'
        },
        {
          property: 'og:description',
          content: 'SLC is Foundation base in Bali'
        }
      ]
    }
  },
  {
    path: '/program',
    name: 'OurProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/OurProgram.vue'),
    meta: {
      title: 'SLC - Programs',
      metaTags: [
        {
          name: 'description',
          content: 'SLC provide programs for help the children future'
        },
        {
          property: 'og:description',
          content: 'SLC provide programs for help the children future'
        }
      ]
    }
  },
  {
    path: '/program/english',
    name: 'EnglishProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/english-program.vue'),
    meta: {
      title: 'SLC - English Programs',
      metaTags: [
        {
          name: 'description',
          content: 'English program for the children'
        },
        {
          property: 'og:description',
          content: 'English program for the children'
        }
      ]
    }
  },
  {
    path: '/program/agriculture',
    name: 'AgricultureProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/agriculture-program.vue'),
    meta: {
      title: 'SLC - Agriculture Programs',
      metaTags: [
        {
          name: 'description',
          content: 'Agriculture program for the children'
        },
        {
          property: 'og:description',
          content: 'Agriculture program for the children'
        }
      ]
    }
  }, {
    path: '/program/coding',
    name: 'CodingProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/coding-program.vue'),
    meta: {
      title: 'SLC - Coding Programs',
      metaTags: [
        {
          name: 'description',
          content: 'Coding program for the children'
        },
        {
          property: 'og:description',
          content: 'Coding program for the children'
        }
      ]
    }
  }, {
    path: '/program/enterprenuer',
    name: 'EnterprenuerProgram',
    component: () => import(/* webpackChunkName: "about" */ '../views/enterprenuer-program.vue'),
    meta: {
      title: 'SLC - Enterprenuer Programs',
      metaTags: [
        {
          name: 'description',
          content: 'Enterprenuer program for the children'
        },
        {
          property: 'og:description',
          content: 'Enterprenuer program for the children'
        }
      ]
    }
  },
  {
    path: '/about/student',
    name: 'AboutStudent',
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentPage.vue'),
    meta: {
      title: 'SLC - About Student',
      metaTags: [
        {
          name: 'description',
          content: 'Look at the student'
        },
        {
          property: 'og:description',
          content: 'Look at the student'
        }
      ]
    }
  }, {
    path: '/activities',
    name: 'Activities',
    component: () => import(/* webpackChunkName: "about" */ '../views/activities.vue'),
    meta: {
      title: 'SLC - Activities',
      metaTags: [
        {
          name: 'description',
          content: "let's see what we did in slc"
        },
        {
          property: 'og:description',
          content: "let's see what we did in slc"
        }
      ]
    }
  }, {
    path: '/about/volounteer',
    name: 'AboutVolunteer',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutVolunteer.vue'),
    meta: {
      title: 'SLC - About Volunteer',
      metaTags: [
        {
          name: 'description',
          content: "Join us to make a smile on their face"
        },
        {
          property: 'og:description',
          content: "Join us to make a smile on their face"
        }
      ]
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import(/* webpackChunkName: "about" */ '../views/UnderContruct.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
    meta: {
      title: 'Page Not Found',
      metaTags: [
        {
          name: 'description',
          content: "Page Not Found"
        },
        {
          property: 'og:description',
          content: "Page Not Found"
        }
      ]
    }
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

  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
