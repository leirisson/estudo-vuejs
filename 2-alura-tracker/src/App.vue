<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />

    </div>

    <div class="column is-three-quarter">
      <FormularioTarefas />
      <!-- Lista de Tarefas -->
    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefas from './components/Formulario.vue';


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefas
  }

});
</script>

<style></style>
