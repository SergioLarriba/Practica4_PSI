<!--login.vue-->
<template>
	<h1>Log Out</h1>
	<p>{{ message }}</p>
</template>

<script>
	import { ref, onMounted } from 'vue';
	import { useRouter } from 'vue-router';
	import { useCounterStore } from '../stores/counter.js';

	export default {
		name: 'logout',

		setup() {
			const router = useRouter(); 
			const message = ref('');
			const store = useCounterStore();
			let countdown = ref(5);

			// Tengo que pasarle el token en la consulta para cerrar sesión 
			const logOut = async () => {
				console.log(store.token);
				const api_call = await fetch('https://practica3-psi.onrender.com/api/v1/token/logout/', {
					method: 'POST',
					headers: { 
						'Content-Type': 'application/json',
						'Authorization': `token ${store.token}` // Aquí se envía el token en el encabezado
					},
				}); 

				if (api_call.ok) {
					store.token = null; // Borra el token de la tienda
					message.value = 'Has cerrado sesión. Serás redirigido a la página principal en ' + countdown.value + ' segundos.';
					
					const intervalId = setInterval(() => {
						countdown.value--;
						message.value = 'Has cerrado sesión. Serás redirigido a la página principal en ' + countdown.value + ' segundos.';
						if (countdown.value === 0) {
							clearInterval(intervalId);
							router.push('/log-in');
						}
					}, 1000);
				} else {
					message.value = 'Error al cerrar sesión';
				}
			}; 

			onMounted(logOut);

			return {
				message, 
				logOut, 
			}
		}
	}
</script>

<style>
	@import url('../assets/login_signup.css'); 
	h1 {
		text-align: center;
	}
</style>