<template>
    <p v-if="isLoggedIn">Bem-vindo, usuário!</p>
    <button @click="logar">Logar</button>
    <button @click="sair">Sair</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "IsLogged",
    data(){
        return {
            isLoggedIn: false
        }
    },
    methods: {
        logar(){
            this.isLoggedIn = true
        },
        sair(){
            this.isLoggedIn = false
        }
    }
})

</script>

<style scoped></style>