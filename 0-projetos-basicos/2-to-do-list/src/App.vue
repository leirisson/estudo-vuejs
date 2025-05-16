<template>
  <h1>Gerenciador de Tarefas</h1>
  <Formulario />
  <ListaTarefas :tarefas="tarefas"  />

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListaTarefas from './components/ListaTarefas.vue';
import Formulario from './components/Formulario.vue';

export default defineComponent({
  name: 'App',
  components: {
    ListaTarefas,
    Formulario
  },
  data() {
    return {
      tarefas: [
        { id: 1, title: 'Comprar mantimentos', completed: true },
        { id: 2, title: 'Estudar Vue.js', completed: true },
        { id: 3, title: 'Ir à academia', completed: false }
      ]
    }
  },
  methods: {
    MarcarTarefaCompleta(tarefaId: number) {
      const tarefa = this.tarefas.find(tarefa => tarefa.id === tarefaId)
      if (tarefa) {
        tarefa.completed = true
      }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
