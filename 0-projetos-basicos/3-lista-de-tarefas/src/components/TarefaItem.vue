<template>
    <li :class="{ destaque: tarefa.prioridade }">
        <span>{{ tarefa.texto }}</span>
    </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    name: "TarefaItem",
    props: {
        tarefa: Object
    },
    methods: {
        marcarComoConluido() {
            this.$emit("concluir-tarefa", this.tarefa.id)
        }
    }
})
</script>