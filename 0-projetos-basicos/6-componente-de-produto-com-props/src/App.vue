<template>
  <HelloWorld msg="Tema: E-commerce" />
  <div class="products">
    <CarProduct image="https://prd.place/400?id=37" name="fusca" price="5.200 R$" description="Corre muito"/>
    <CarProduct image="https://prd.place/400?id=35" name="Biz ano 1950" price="500 R$"  description="Corre muito"/>
    <CarProduct image="https://prd.place/400?id=7" name="Monitor 23 polegadas" price="150 R$"  description="alta definição"/>
    <CarProduct image="https://prd.place/400?id=27" name="Espelho super magico" price="250 R$"  description="Espelho magico"/>
    <CarProduct image="https://prd.place/400?id=17" name="mesa de canto" price="75 R$"  description="Mesa muito nova"/>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import CarProduct from './components/CarProduct.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    CarProduct
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

.products{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: auto;
}
</style>
