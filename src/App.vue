<!-- App.vue -->
<template>
  <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/sign-up">Sign Up</router-link>
		<router-link to="/log-out">Log Out</router-link>
	</nav>
  <!-- Renderiza el componente correspondiente a la ruta actual -->
  <router-view></router-view>
</template>


<script>
import Signup from './components/signup.vue'; 
import Login from './components/login.vue';
import Logout from './components/logout.vue';
export default {
  name: 'App',
  components: {
    Signup, 
    Login, 
    Logout, 
  },
}
</script> 


