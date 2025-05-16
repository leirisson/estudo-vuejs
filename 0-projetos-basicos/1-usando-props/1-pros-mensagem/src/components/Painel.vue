<template>
   <MensagemComponent mensagem="Leirisson"/>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import MensagemComponent from './Mensagem.vue'


export default defineComponent({
    name: "PainelControl",
    components: {
        MensagemComponent
    }

   //2-passando-objetos-com-validacao
})
</script>


<style scoped></style>