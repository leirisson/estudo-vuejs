<template>
  <div class="hello">
  </div>
  <div class="form-temp">
    <label>Temperatura</label><br>
    <input type="number" v-model="temperatura">
  </div>
  <div>
    <h2>Temperatura: {{ temperatura }}Cº</h2>
    <p v-if="temperatura >= 30">Está muito quente! 🥵</p>
    <p v-else-if="temperatura >= 20">Clima agradável 😎</p>
    <p v-else>Está frio! 🧥</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'HelloWorld',

  data(){
    return {
      temperatura: 22 as number
    }
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
