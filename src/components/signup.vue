<!--login.vue-->
<template>
	<form @submit.prevent="enviarSignUp"> 
		<div class="container-padre">
			<div class="container">
				<h1>
					My Chess SignUp Page
				</h1>
				<!--Email-->
				<input 
					placeholder="Email"
					v-model="user.email"
					type="email"
					data-cy="email"
					required
				> 
				<!--Password-->
				<input
					placeholder="Password"
					v-model="user.password"
					type="password"
					data-cy="password"
					required
				>
				<!--Confirm Password-->
				<input
					placeholder="Confirm Passwrod"
					v-model="user.confirmPassword"
					type="password"
					data-cy="comfirm-password"
					required
				>
				<!--Botón de envío-->
				<button type="submit" value="SignUp" @click="signUp">Sign Up</button> <!--Click -> emits en javascript-->
			</div>
			<aside>
				<img src="images/chess_image.jpg" alt="">
			</aside>
		</div>

	</form>
</template>
 
<script>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	export default {
		//Nombre del componente
		name: "signup",  
 
		setup(props, ctx) {
			const user = ref({
				email: '',
				password: '',
				confirmPassword: '',
			})
			const router = useRouter();

			const enviarSignUp = () => {
				if (user.password !== user.confirmPassword) {
					alert('Las contraseñas no coinciden'); 
				} else {
					// Emite un evento llamado SignUp con las credenciales del usuario 
					ctx.emit('signUp', user.value); 
					router.push('/log-in'); // Redirige al usuario a la pantalla de inicio de sesión
				}
			}; 

			return { 
				user, 
				enviarSignUp, 
			}; 
		}, 
	}; 
</script>

<style>
	@import url('../assets/login_signup.css'); 
</style>