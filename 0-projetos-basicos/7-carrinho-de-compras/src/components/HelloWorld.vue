<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Tema: E-commerce

      Modifique o componente Product para emitir um evento add-to-cart quando um botão "Adicionar ao carrinho" for
      clicado. O componente pai deve escutar esse evento e adicionar o produto a um array
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
