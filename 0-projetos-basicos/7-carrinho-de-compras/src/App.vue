<template>
  <HelloWorld msg="Carrinho de Compras (Emit)" />
  <CardProduct @add-carrinho="aoAdicioarCarrinho" image="https://prd.place/400?id=17" name="mesa de canto"
    price="75" description="Mesa muito nova" />

    <ul v-for="(produto, index) in carrinho" :key="index">
      <li>Nome: {{ produto.name }} || Preço: {{ produto.price }}</li>
    </ul>
    <p v-if="carrinho.length > 0 "> Total: {{ somaTotal }} </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CardProduct from './components/CardProduct.vue';
import IProduto from '../src/interface/IProduto'

export default defineComponent({
  name: 'App',
  data() {
    return {
      carrinho: [] as IProduto[]
    }
  },
  components: {
    HelloWorld,
    CardProduct
  },

  computed: {
    somaTotal(): any{

      if(this.carrinho.length === 0){
        return `sem rpodutos`
      }

      const valores = this.carrinho.map( produto => produto.price)
      const total = valores.reduce((acumulador, valor) => Number(acumulador) + Number(valor))

      return total
    }
  },

  methods: {
    aoAdicioarCarrinho(produto: IProduto): void {
      this.carrinho.push(produto)
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
