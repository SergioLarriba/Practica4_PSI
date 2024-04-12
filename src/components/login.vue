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

</script>

<style>
	@import url('../assets/login_signup.css'); 
</style>