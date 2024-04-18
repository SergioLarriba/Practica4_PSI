<!--login.vue-->
<template>
	<form @submit.prevent="enviarLogIn"> 
		<div class="container-padre">
			<div class="container">
				<h1>
					My Chess LogIn Page
				</h1>
				<p>
					Do not have an account? <router-link to="/sign-up">Sign Up</router-link>
				</p>
				<!--Email-->
				<input 
					placeholder="Email"
					v-model="user_loguea.email"
					type="email"
					data-cy="email"
					required
				> 
				<!--Password-->
				<input
					placeholder="Password"
					v-model="user_loguea.password"
					type="password"
					data-cy="password"
					required
				>
				<!--Botón de LogIn-->
				<button type="submit" value="LogIn">Log In</button>
				<p>
					Welcome to our chess page. If you want to kwnow what led us to create yet another chess site, then read on... <router-link to="/here">here</router-link>
				</p>
			</div>
			<aside>
				<img src="images/chess_image.jpg" alt="">
			</aside>
		</div>

	</form>
</template>

<script>
	import { ref } from 'vue';

	export default {
		// Nombre del componente 
		name: "login", 

		setup(props, ctx) {
			const user_loguea = ref({
				email: '',
				password: '',
			})

			const enviarLogIn = () => {
				ctx.emit('logIn', user_loguea.value.email, user_loguea.value.password)
			}

			


			return {
				user_loguea, 

				enviarLogIn, 
			}
		}, 
	}; 

	
</script>

<style>
	@import url('../assets/login_signup.css'); 
</style>