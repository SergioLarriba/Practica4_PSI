<!--signup.vue -> Log In -->
<!-- Solicitar la clave por duplicado y ver si con Vue si se ha escrito bien-->
<template>
	<!-- Contenedor de la página SignUp -->
	<form @submit.prevent="enviarSignUp">
		<div class="container">
			<!--Email-->
			<label for="Email addres">Email address</label>
			<input type="email" id="email" name="email" required> <!--Campo obligatorio a rellenar-->
			<!--Password-->
			<label for="Password">Password</label>
			<input type="password" id="password" name="password" required> <!--Campo obligatorio a rellenar-->
			<!--Confirm Password-->
			<label for="Confirm Password">Confirm Password</label>
			<input type="password" id="confirmPassword" name="confirmPassword" required> <!--Campo obligatorio a rellenar-->
			<!--Botón de envío-->
			<button type="submit" value="SignUp"></button>
		</div>
	</form>
</template>


<script>
</script>

<style>

</style>