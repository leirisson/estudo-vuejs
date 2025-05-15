<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="logo da alura track">
        </h1>
    </header>
</template>

<script lang="ts">
/**todo o script typescript */

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BarraLateral'
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
    justify-content: center;
}

header > h1 > img {
    border-radius: 10px;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>