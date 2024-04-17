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
				<input type="email" id="email" name="email" placeholder="Email address" required>
				<!--Password-->
				<input type="password" id="password" name="password" placeholder="Password" required>
				<!--Botón de LogIn-->
				<button type="submit" value="LogIn">Log In</button>
				<p>
					Welcome to our chess page. If you want to kwnow what led us to create yet another chess site, then read on... 
				</p>
			</div>
			<aside>
				<img src="images/chess_image.jpg" alt="">
			</aside>
		</div>

	</form>
</template>

<script>

	import { useCounterStore } from '../stores/counter.js';

	export default {
		methods: {
			async enviarLogIn() {
			let email = document.getElementById('email').value;
			let password = document.getElementById('password').value;

			// Llamamos a la API
			const response = await fetch('http://host:port/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (response.ok) {
				const data = await response.json();

				//Usamos Pinia
				const store = useCounterStore();
				store.setToken(data.token);
				store.setPlayerId(data.playerId);

				//Redirección a la página de creación de partidas
				this.$router.push('/creategame');
			} else {
				// Error
				console.error('Invalid username or password');
			}
			}
		}
	}

</script>

<style>
	@import url('../assets/login_signup.css'); 
</style>
