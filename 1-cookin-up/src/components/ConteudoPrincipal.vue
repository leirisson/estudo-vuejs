<script lang="ts">

import SelecionarIngredientes from './SelecionarIngredientes.vue';
import Tag from '@/components/Tag.vue';
import MostrarReceitas from '@/components/MostrarReceitas.vue';

import type { Pagina } from '@/types/Pagina';

export default {
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: 'SelecionarIngredientes' as Pagina
    }
  },
  components: {
    SelecionarIngredientes,
    Tag,
    MostrarReceitas

  },
  methods: {
    adcionarIngrediante(ingrediente: string) {
      this.ingredientes.push(ingrediente)

    },
    removerIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter(ingredienteDaLista => ingrediente !== ingredienteDaLista)
    },

    navegar(pagina: Pagina){
      this.conteudo =pagina;
    }

  }
}
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="subtitulo-lg sualista-testo">
        Sua lista:
      </span>
      <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
        <li v-for="ingrediente in ingredientes" :key="ingrediente">
          <Tag :texto="ingrediente" ativa />
        </li>
      </ul>

      <p v-else class="paragrafo lista-vazia">
        <img src="../assets/images/icones/lista-vazia.svg" alt="icone de pesquisa" srcset="">
        Sua lista está vazia, selecione ingredientes para iniciar.
      </p>
    </section>
    
    <SelecionarIngredientes
      v-if="conteudo === 'SelecionarIngredientes'" 
      @adcionarIngrediente="adcionarIngrediante"
      @remover-ingrediente="removerIngrediente" 
      @bucar-receitas="navegar('MostrarReceitas')"
    />

    <MostrarReceitas 
      v-else-if="conteudo === 'MostrarReceitas'" 
    />

    

  </main>

</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}



.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>