<template> 
  <div class="container" :style="{ backgroundImage: `url(${backgroundImage})` }">
		<div class="wrapper">
			<h1>Create Game</h1>
			<!--Combobox-->
			<select v-model="selectedColor" name="Select a game">
				<option value="" disabled selected>Select a game</option>
				<option value="join-any-game">Join Any Game</option>
				<option value="join-specific-game">Join Specific Game</option>
			</select>
			<!--Si selecciona un juego especifico -> tiene que introducir su game id-->
			<input 
				v-if="selectedColor === 'join-specific-game'"
				placeholder="Game ID"
				type="text"
			>
			<!--Boton de crear juego-->
			<button @click="createGame">Create Game</button>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import backgroundImage from '/images/pieza-ajedrez-dramatica.jpg'

	export default {
		// Nombre del componente 
		name: 'creategame', 
		setup() {
			const selectedColor = ref(''); 

			// Funcion para crear un juego 
			const createGame = () => {
				// Join Specific game -> funcionalidad no implementada
				if (selectedColor.value === 'join-specific-game') {
					console.log('Creating game...');
				} else {
					// Join Any Game -> funcionalidad si implementada
					// 1 - Buscar si hay juegos disponibles con 1 jugador ausente 
				}
			}

			return {
				selectedColor, 
				backgroundImage, 
				createGame, 
			}
		}, 
	}; 
</script>

<style scoped>
  .container {
		display: flex;
		align-items: center;
		height: 100vh;
		background-size: cover; 
		background-position: center; 
		border-radius: 10px;
  }
	.wrapper {
		display: flex;
		flex-direction: column; 
		background-color: rgba(187, 186, 186, 0.5);
		padding: 20px;
		margin-top: 70px; 
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
		border-radius: 10px;
    transition: box-shadow 0.35s ease; 
	}
	.wrapper h1 {
		color: white;
		font-size: 2.2em; 
	}
	select {
		margin: 10px;
		padding: 10px;
		border-radius: 10px;
		border: 1px solid black;
		box-shadow: 5px 5px 5px rgb(70, 60, 60); 
		width: 500px; 
	}
	.wrapper:hover {
		box-shadow: 5px 5px 5px rgba(255, 255, 255, 0.5); 
	}

</style>