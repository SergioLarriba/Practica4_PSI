<!-- App.vue -->
<template>
  <nav>
		<router-link to="/">Home</router-link>
		<router-link to="/sign-up">Sign Up</router-link>
		<router-link to="/log-out">Log Out</router-link>
	</nav>
  <!-- Renderiza el componente correspondiente a la ruta actual -->
  <router-view
    @signUp="guardarSignUp"
    @logIn="comprobarLogIn"
  />
</template>


<script>
import { ref } from 'vue';
import signup from './components/signup.vue';
import { useCounterStore } from './stores/counter.js';

export default {
  name: 'App',

  components: {
    signup, 
  }, 

  setup() {
    const personas_registradas = ref([])

    // Guarda la persona registrada 
    const guardarSignUp = (persona) => {
      alert('Usuario registrado con éxito')

      // Añado la persona registrada a mi array de personas registradas
      personas_registradas.value.push(persona)
    }; 

    // Comprueba que la persona se puede loguear 
    const comprobarLogIn = async (email, password) => {
      /*
      const personaEncontrada = personas_registradas.value.find(persona => {
        return persona.email === email && persona.password === password; 
      }); 
      
      if (!personaEncontrada) {
        alert('¡Regístrate primero o escribe bien la contraseña!')
        return false; 
      } 
      alert ('!Bienvenido de nuevo!')
      return true 
      */
      // Token -> Llamo a la api para registrarme 
      const api_call = await fetch('https://practica3-psi.onrender.com/api/v1/users/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, username: email, password: password })
      }); 

      // Llamo a la api para loguearme y aquí me devuelve el token
      const api_call_login = await fetch('https://practica3-psi.onrender.com/api/v1/token/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password: password })
      }); 

      // Registro -> Login -> Token
      if (api_call.ok && api_call_login.ok) {
        const response = await api_call.json();
        const email = response.email;
        const username = response.username;
        console.log(email, username);

        const response_login = await api_call_login.json();
        const token = response_login.auth_token;
        console.log(token);

        // Usamos Pinia
        const store = useCounterStore();
        store.useCounterStore().setToken(token);
        store.setEmail(email);
        store.setUsername(username);

        // Redirección a la página de creacion de partidas
        router.push('/log-in'); 
      }
    }

    return {
      guardarSignUp, 
      comprobarLogIn, 
    }; 
  }
}
</script> 


