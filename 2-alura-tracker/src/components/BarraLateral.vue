<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo da alura track">
        </h1>
        <button class="button" @click="alteraTema">{{ textoDoBotao }}</button>
    </header>
</template>

<script lang="ts">
/**todo o script typescript */

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data() {
        return {
            modoEscurtoAtivo: false
        }

    },
    methods: {
        alteraTema() {
            this.modoEscurtoAtivo = !this.modoEscurtoAtivo
            this.$emit('aoTemaAlterado', this.modoEscurtoAtivo)
        }
    },
    computed: {
        textoDoBotao() {
            if (this.modoEscurtoAtivo) {
                return "Desativar modo escuro"
            }
            return 'Ativar o modo escuro.'
        }
    }
})
</script>

<style scoped>
/**todo o estilo do componente */
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    text-align: center;
}

header>h1>img {
    border-radius: 10px;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>