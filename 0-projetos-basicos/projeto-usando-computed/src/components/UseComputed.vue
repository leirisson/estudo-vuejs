<template>
    <p>Nome Completo: {{ juntarNome }} </p> <!-- Usando o computed -->
    <input type="text" name="nome" id="nome" placeholder="Nome" v-model="nome">
    <input type="text" name="sobreNome" id="sobreNome" placeholder="Sobre nome" v-model="sobreNome">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            nome: "Leirisson",
            sobreNome: "Souza dos Santos"
        }
    },
    computed: {
        juntarNome(): string { // 👈 Isso é um computed!
            return `${this.nome} ${this.sobreNome}`;
        }
    }
})
</script>

<style></style>