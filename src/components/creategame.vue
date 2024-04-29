<template> 
  <div class="container" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="wrapper">
            <h1>Create Game</h1>
            <!--Combobox-->
            <select v-model="selectedColor" name="Select a game" id="selectGame">
                <option value="" disabled selected>Select a game</option>
                <option value="game_join_any">Join any game</option>
                <option value="Join specific game (gameID required)">Join specific game (gameID required)</option>
            </select> 
            <!--Si selecciona un juego especifico -> tiene que introducir su game id-->
			<input label="Enter gameID"
				v-if="selectedColor === 'Join specific game (gameID required)'"
				type="text"
				data-cy="gameID"
				v-model="gameID"
				placeholder="Enter gameID"
			> 
            <!--Boton de crear juego-->
            <button @click="createGame" data-cy="createGame-button">Create Game</button>
			<!--Mensaje de error-->
			<div data-cy="error-message">{{ errorMessage }}</div>
        </div>
    </div>
</template>

<script>
	import { onMounted, ref } from 'vue';
	import backgroundImage from '/images/pieza-ajedrez-dramatica.jpg'
	import { useCounterStore } from '../stores/counter.js';
	import { useRouter } from 'vue-router';

	export default {
		// Nombre del componente 
		name: 'creategame', 
		setup() {
			const selectedColor = ref(''); 
			const gameID = ref('Enter gameID');
			const errorMessage = ref('');
			const store = useCounterStore();
			const router = useRouter();

			// Funcion para crear un juego 
			const createGame = async () => {
				// Join Specific game -> funcionalidad no implementada
				if (selectedColor.value === 'Join specific game (gameID required)') {
					console.log('Creating game...');
				}
				// Join Any Game -> Petición a la api 
				else if (selectedColor.value === 'game_join_any') {
					const api_call_create_game = await fetch ('https://practica3-psi.onrender.com/api/v1/games/', {
						method: 'POST',
						headers: { 
							'Content-Type': 'application/json',
							'Authorization': `token ${store.token}` // Aquí se envía el token en el encabezado
						},
					}); 

					if (api_call_create_game.ok) {
						const response = await api_call_create_game.json();
						const gameId = response.id;
						store.setGameId(gameId);
						console.log(store.gameId);

						// Redirigir a la página de juego
						router.push('/play')
					} else {
						// Alerta diciendo que el juego está activo
						const response = await api_call_create_game.json(); 
						console.log(store.gameId);
						if (response.detail === 'Create Error: Game is already active') {
							alert('You have an active game. Please finish it before creating a new one.')
							router.push('/play')
						}
						errorMessage.value = "Error: Cannot create game"
					}
				}
			}; 

			return {
				selectedColor, 
				backgroundImage, 
				gameID, 
				errorMessage, 
				createGame, 
			}
		}
	}
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