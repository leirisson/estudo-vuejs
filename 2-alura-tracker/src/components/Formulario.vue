<template>
    <div class="box">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulário para a criaçãode uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" name="task" id="task">
            </div>

            <div class="column">
               <TemporizadorTempo />
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
})
</script>


<style scoped></style>