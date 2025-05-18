<template>
    <div>
        <button @click="mostrar = !mostrar">❌</button>
        <p v-show="mostrar">🚨 Atenção: Você precisa salvar seu progresso!</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "ShowClose",
    data() {
        mostrar: false
    }
})
</script>