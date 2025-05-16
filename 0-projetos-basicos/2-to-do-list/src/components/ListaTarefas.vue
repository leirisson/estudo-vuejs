<template>
    <div>
        <h2>Tarefas Pendentes</h2>
        <ul>
            <li v-for="tarefa in tarefasIncompletas" :key="tarefa.id">
                {{ tarefa.title }}
                <button @click="completarTarefa(tarefa.id)">Concluir</button>
            </li>
        </ul>

        <h2>Tarefas concluídas</h2>
        <ul>
            <li v-for="tarefa in tarefacompleta" :key="tarefa.id">
                {{ tarefa.title }}
            </li>
        </ul>

        <p v-if="tarefas.length === 0">Nem uma tarefa adicionada</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ITask from '@/interfaces/ITask';

export default defineComponent({
    name: "ListaTarefas",
    props:{
        tarefas:{
            type: Array,
            required: true
        }
    },
    methods: {
        completarTarefa(tarefaID: ITask){
            this.$emit('tarefaCompleta', tarefaID)
        },
    },
    computed: {
        tarefasIncompletas(){
            return this.tarefas.filter(tarefa => !tarefa.completed)
        },
        tarefacompleta(){
            return this.tarefas.filter(tarefa => tarefa.completed)
        }
    }
})
</script>