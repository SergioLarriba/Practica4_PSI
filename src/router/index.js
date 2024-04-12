import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-up',
      name: 'signup',
      component: signup
    },
    /* Ruta por defecto 
    {
      path: '/', 
      redirect: '/login'
    }
    */
  ]
})

export default router
