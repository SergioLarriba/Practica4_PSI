<!--signup.vue --> 
<!--Solicitar la clave por duplicado y ver si con Vue si se ha escrito bien-->
<template>
	<!-- Contenedor de la página SignUp -->
	<form @submit.prevent="enviarSignUp">
		<div class="container-padre">
			<div class="container">
				<h1>
					My Chess SignUp Game
				</h1>
				<!--Email-->
				<input type="email" id="email" name="email" placeholder="Email address" required> <!--Campo obligatorio a rellenar-->
				<!--Password-->
				<input type="password" id="password" name="password" placeholder="Password" required> <!--Campo obligatorio a rellenar-->
				<!--Confirm Password-->
				<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required> <!--Campo obligatorio a rellenar-->
				<!--Botón de envío-->
				<button type="submit" value="SignUp">Sign Up</button>
			</div>
			<aside>
				<img src="images/imagen_signup.png" alt="">
			</aside>
		</div>
		
	</form>
</template>


<script>
</script>

<style>
	.container-padre{
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: nowrap;
	}
	.container{ 
		display: flex; 
		flex-direction: column;
		flex-wrap: nowrap;
		padding-left: 20px;
	}
	.container input, button{
		margin: 10px;
		padding: 10px;
		border-radius: 10px;
		border: 1px solid black;
	}
	.container h1{
		padding: 10px;
	}
	.container button{
		transition: background-color 0.5s ease, color 0.5s ease;
		background-color: rgb(0, 0, 0);
		color: white;
	}
	.container button:hover{
		background-color: rgb(255, 255, 255);
		color: black;
		
	}
	aside{ 
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
	}
	label{
		color: black; 
	}	
	h1{
		color: black;
	}
</style>