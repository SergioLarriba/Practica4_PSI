import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import logout from '../views/logout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-up',
      name: 'signup',
      component: signup
    },
    {
      path: '/', 
      redirect: '/log-in', 
    }, 
    {
      path: '/log-in',
      name: 'login',
      component: login
    }, 
    {
      path: '/log-out', 
      name: 'logout',
      component: logout
    }
  ]
})

export default router
