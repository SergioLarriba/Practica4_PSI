import { createRouter, createWebHistory } from 'vue-router'
import signup from '../components/signup.vue'
import login from '../components/login.vue'
import logout from '../components/logout.vue'

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
