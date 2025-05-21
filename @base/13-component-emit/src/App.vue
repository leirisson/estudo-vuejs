<template>
  <HelloWorld msg="Capturando evento com $EMIT"/>
  <ComponentPai />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ComponentPai from './components/ComponentPai.vue';


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    ComponentPai
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
