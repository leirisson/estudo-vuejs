<script lang="ts">
import { obterCategorias } from '@/http/index';
import CardCategoria from '@/components/CardCategoria.vue';

import type ICategoria  from '@/interfaces/ICategoria';
import BotaoPrincipal from '@/components/BotaoPrincipal.vue';


export default {
  components:{CardCategoria, BotaoPrincipal},
  data() {
    return {
      categorias: [] as ICategoria[] 
    }
  },
  async created() {
    this.categorias = await obterCategorias()
  },
  emits:['adcionarIngrediente', 'removerIngrediente','bucarReceitas']
}
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">
      Ingredientes
    </h1>
    <p class="instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>
    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
      <CardCategoria 
        :categoria
        @adcionar-ingrediente="$emit('adcionarIngrediente', $event)"
        @remover-ingrediente="$emit('removerIngrediente', $event)" 
      />
      </li>
    </ul>
    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
    <BotaoPrincipal texto="Buscar Receita" @click="$emit('bucarReceitas')"/>
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>