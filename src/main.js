import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import router from './router'


import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

//Guardamos en pinia en vez de en router
app.use(pinia)

app.mount('#app')
