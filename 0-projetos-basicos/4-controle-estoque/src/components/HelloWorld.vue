<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <div class="todos-produtos">
    <div class="produto" v-for="(produto, index) in produtos" :key="index">
      <h2>produto</h2>
      <p v-if="produto.estoque > 0">
        <strong>Produto:</strong> {{ produto.nome }} disponível <br>
        <strong>Unidades: </strong> ({{ produto.estoque }}). <br>
        <button @click="comprar(index)">Comprar</button>
      </p>
      <p v-else class="red">Produto fora do estoque</p>

    </div>

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
      produtos: [
        { nome: 'Fone de ouvido Bluetooth', estoque: 3 },
        { nome: 'Smartphone Android', estoque: 15 },
        { nome: 'Notebook i7 16GB', estoque: 5 },
        { nome: 'Mouse sem fio', estoque: 22 },
        { nome: 'Teclado mecânico', estoque: 8 },
        { nome: 'Monitor 24 polegadas', estoque: 6 },
        { nome: 'Câmera DSLR', estoque: 4 },
        { nome: 'Tablet 10 polegadas', estoque: 9 },
        { nome: 'Caixa de som portátil', estoque: 12 },
        { nome: 'Carregador wireless', estoque: 0 }
      ],
    }
  },
  methods: {
    comprar(index: number) {
      this.produtos[index].estoque -= 1
    }
  }
});
</script>

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

.todos-produtos {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.produto {
  border: 1px solid #000;
  padding: .5rem;
  max-width: 200px;
}

.red {
  background-color: red;
  padding: .3rem;
  color: #fff;
}
</style>
