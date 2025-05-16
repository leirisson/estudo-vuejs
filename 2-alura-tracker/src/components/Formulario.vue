<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para a criaçãode uma nova tarefa">
                <input 
                type="text" 
                class="input" 
                placeholder="Qual tarefa você deseja iniciar ?" 
                name="task" 
                id="task"
                v-model="descricaoDaTarefa"
                >
            </div>

            <div class="column">
                <TemporizadorTempo @ao-temporizador-finalizado="finalizarTarefa" />
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorTempo from '../components/Temporizador.vue'

export default defineComponent({
    name: "FormularioTarefas",
    components: {
        TemporizadorTempo
    },
    data(){
        return {
            descricaoDaTarefa:''
        }
    },
    methods: {
        finalizarTarefa(tempoDeCorrido: number): void {
            console.log('tempo da tarefa: ',tempoDeCorrido)
            console.log('descrição da tarefa: ', this.descricaoDaTarefa)
            this.descricaoDaTarefa = ''
        }
    }
})
</script>


<style scoped></style>