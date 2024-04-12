<!--login.vue-->
<template>
	<form @submit.prevent="enviarLogIn"> 
		<div class="container-padre">
			<div class="container">
				<h1>
					My Chess SignUp Page
				</h1>
				<!--Email-->
				<input type="email" id="email" name="email" placeholder="Email address" required>
				<!--Password-->
				<input type="password" id="password" name="password" placeholder="Password" required>
				<!--Confirm Password-->
				<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required> <!--Campo obligatorio a rellenar-->
				<!--Botón de envío-->
				<button type="submit" value="SignUp">Sign Up</button>
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