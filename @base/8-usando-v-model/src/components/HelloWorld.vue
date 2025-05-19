<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

  <div class="form">
    <input type="text" placeholder="0" v-model="valor">
  </div> +
  <div class="form">
    <input type="text" placeholder="0" v-model="valor2">
  </div>
  <button @click=" soma(valor, valor2)">Somar</button>
  <div>
    <p>
      {{ resultado }}
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
  data() {
    return {
      valor: 0,
      valor2: 0,
      resultado: 0
    }
  },
  methods: {
    soma(v1: number, v2: number) {
      this.resultado = Number(v1) + Number(v2)
    }
  }
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
