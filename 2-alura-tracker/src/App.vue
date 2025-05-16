<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuroAtivo}">
    <div class="column is-one-quarter">
      <BarraLateral @ao-tema-alterado="trocarOTema" />

    </div>

    <div class="column is-three-quarter conteudo">
      <FormularioTarefas @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaTask v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
      </div>
      <BoxCaixa v-if="listaVazia">
        Você não está muito produtivo hoje. 🎯😢
      </BoxCaixa>
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
import BoxCaixa from './components/Box.vue'


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioTarefas,
    TarefaTask,
    BoxCaixa
  },

  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
    trocarOTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },

  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0
    }
  }


});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --texto-primary: #000;

}

main.modo-escuro {
  --bg-primary: #2b2d42;
  --texto-primary: #ddd;
}

.conteudo {
  background-color: var(--bg-primary);

}
</style>
