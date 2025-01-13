<script lang="ts">
import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import Tag from '@/components/Tag.vue';
import IngredienteSelecionado from '@/components/IngredienteSelecionado.vue';


export default{
    props:{
        categoria: {
          type: Object as PropType<ICategoria>,
          required: true
       },
    },
    components: {Tag, IngredienteSelecionado},
    emits:['adcionarIngrediente', 'removerIngrediente']
}

</script>
<template>
<article class="categoria">
<header class="categoria__cabecalho">
    <img :src="`../imagens/icones/categorias_ingredientes/${categoria.imagem}`" />
    <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
</header>
<ul class="categoria__ingredientes">
    <li v-for=" ingrediente in categoria.ingredientes" :key="ingrediente">
        <IngredienteSelecionado 
        :ingrediente="ingrediente"
        @adcionarIngrediente="$emit('adcionarIngrediente', $event)"
        @removerIngrediente="$emit('removerIngrediente', $event)"
         />
    </li>
</ul>
</article>
</template>

<style scoped>
.categoria {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 4px 4px 10px 0px rgba(59, 59, 59, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 3.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.categoria__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>