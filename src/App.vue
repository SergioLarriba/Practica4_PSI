<!-- App.vue -->
<template>
  <div id="app" class="container">
    <!-- Renderiza el componente correspondiente a la ruta actual -->
    <router-view></router-view>
  </div>
</template>



<script>
import Signup from './components/signup.vue'; 
export default {
  components: {
    Signup
  },
}
</script>


<style>
  .container {
    display: flex; 
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
  }
</style>