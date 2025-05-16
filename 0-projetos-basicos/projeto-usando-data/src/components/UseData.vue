<template>
    <div>
        <p>
            Meu nome é: {{ nome }}
        </p>
        <button @click="mudarNome">Trocar Nome</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    data(){
        return {
            nome:"Leirisson"
        }
    },
    methods: {
        mudarNome(){
            this.nome = "Leirisson souza dos santos"
        }
    }
})
</script>