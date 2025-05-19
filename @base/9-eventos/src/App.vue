<template>
  <HelloWorld msg="propriedades computadas"/>
  <hr>
  <TextInvert />
  <hr>
  <Todos />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TextInvert from './components/TextInvert.vue'
import Todos from './components/Todos.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TextInvert,
    Todos
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
