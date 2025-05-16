<template>
    <p v-if="idade2 > 10">Você é uma criança.</p>
    <p v-else-if="idade1 < 18 ">Você é um adolescente.</p>
    <p v-else>Você é um adulto.</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "VerificaIdade",
    data() {

        return {
            idade1: 78,
            idade2: 5,
            idade3: 16
        }

    }
})
</script>