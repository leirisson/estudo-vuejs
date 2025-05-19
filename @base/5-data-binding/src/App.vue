<template>
  <CardUser />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardUser from './components/CardUser.vue'

export default defineComponent({
  name: 'App',
  components: {
    CardUser
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
