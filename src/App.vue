<!-- App.vue -->
<template>
  <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/sign-up">Sign Up</router-link>
		<router-link to="/log-out">Log Out</router-link>
	</nav>
  <router-view/>
</template>


<script>
import signup from './components/signup.vue';
import login from './components/login.vue';
import logout from './components/logout.vue';

export default {
  name: 'App', 

  components: {
    signup, 
    login,
    logout,
  }, 
}
</script> 


