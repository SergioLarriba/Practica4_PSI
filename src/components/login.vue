<!--login.vue-->
<template>
	<form @submit.prevent="logIn"> 
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
					v-model="email"
					type="email"
					data-cy="email"
					required
				> 
				<!--Password-->
				<input
					placeholder="Password"
					v-model="password"
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
	import { useCounterStore } from '../stores/counter.js';

	export default {
		// Nombre del componente 
		name: "login", 

		setup() {
			const email = ref(''); 
			const password = ref('');

			const logIn = async () => {
				// Llamo a la api para loguearme y aquí me devuelve el token
				const api_call_login = await fetch('https://practica3-psi.onrender.com/api/v1/mytokenlogin/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ username: email.value, password: password.value })
				}); 

				// Guardo el token en pinia 
				if (api_call_login.ok) {
					const response = await api_call_login.json();
					const token = response.auth_token;
					const playerId = response.user_id; 

					// Usamos Pinia para guardar el token 
					const store = useCounterStore();
					store.setToken(token);
					store.setPlayerId(playerId);

					console.log(store.token, store.playerId)
				}
			}

			return {
				email, 
				password, 

				logIn, 
			}
		}, 
	}; 

	
</script>

<style>
	@import url('../assets/login_signup.css'); 
</style>