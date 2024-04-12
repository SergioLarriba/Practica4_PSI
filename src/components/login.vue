<template>
    <div class="login">
        <h1 class="title">myChess login page</h1>
        <form action class="form">
            <label class="form-label" for ="#email">Email Adress</label>
            <input
                v-model="email"
                class="form-input"
                type="email"
                id="email"
                required
                :class="{'is-invalid':procesando && correoInvalido}"
                placeholder="Email Adress"
            />
            <label class="form-label" for="#password">Password</label>
            <input
                v-model="password"
                class="form-input"
                type="password"
                id="password"
                required
                :class="{'is-invalid':procesando && contraseniaInvalida}"
                placeholder="Password"
            />
            <input class="form-submit" type="submit" value="LOG IN" />
            </form>
    </div>
</template>


<script>
    import axios from 'axios';

    export default{
        data(){
            return{
                correo: '',
                password: '',
                procesando: false,
                correoInvalido: false,
                contraseniaInvalida: false,
            };
        },
    }


</script>

