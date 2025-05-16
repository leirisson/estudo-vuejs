<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />

    </div>

    <div class="column is-three-quarter">
      <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaTask 
        v-for="(tarefa, index) in tarefas" 
        :key="index" 
        :tarefa="tarefa"/>
      </div>

    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefas from './components/Formulario.vue';
import ITarefa from './interfaces/ITarefa';
import TarefaTask from './components/Tarefa.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefas,
    TarefaTask
  },

  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    }
  }

});
</script>

<style scoped>
.lista {
  padding: 1rem;
}
</style>
