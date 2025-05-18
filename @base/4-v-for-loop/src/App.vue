<template>
  <ArrayComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrayComponent from './components/AraayComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    ArrayComponent
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
