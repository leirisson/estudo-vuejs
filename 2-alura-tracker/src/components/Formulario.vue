<template>
    <div class="box formulario">
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
    emits:['aoSalvarTarefa'],
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
                this.$emit('aoSalvarTarefa',{
                    duracaoEmSegundos: tempoDeCorrido,
                    descricao: this.descricaoDaTarefa
                } )
            this.descricaoDaTarefa = ''
        }
    }
})
</script>


<style>
   .formulario{
    color: var(--texto-primary);
    background-color: var(--bg-primary);
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.342);
   }

</style>