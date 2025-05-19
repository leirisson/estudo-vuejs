<template>
  <div>
    <p>One-way data binding</p>
    <p>Two-way data binding</p>
    <p>v-model -> fomularios</p>
  </div>
  <hr>
  <div>
    <label>Nome</label> <br>
    <input type="text" v-model="name">
    <p>
      {{ name }}
    </p>
  </div>
  <hr>
  <div>
    <select v-model="sports">
      <option value="">Escolha</option>
      <option value="futebol">Futebol</option>
      <option value="skate">Skate</option>
      <option value="tenis">Tenis</option>
    </select>
    <p>Esporte escolhido: <span class="escolhido" v-if="sports">{{ sports }}</span></p>
  </div>
  <hr>
  <div>
    <label> News Letter</label> <br><br>
    
    <label>sim</label>
    <input type="radio" value="sim" v-model="newsletter">
        <label>não</label>
    <input type="radio" value="não" v-model="newsletter">
     <p>Esporte escolhido: <span class="escolhido" v-if="newsletter">{{ newsletter }}</span></p>
  </div>
  <hr>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      name: "Leirisson",
      sports: '',
      newsletter: ''

    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000;
  margin-top: 60px;
}

.escolhido {
  background-color: green;
  color: #fff;
  padding: .3rem;
  border-radius: 4px;
}
</style>
