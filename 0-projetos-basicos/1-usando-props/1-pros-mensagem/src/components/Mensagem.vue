<template>
    <h1>Olá, {{ mensagem }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "MensagemComponent",
    props: ['mensagem']
})
</script>