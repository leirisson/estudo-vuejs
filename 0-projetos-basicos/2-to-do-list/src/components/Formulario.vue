<template>
    <div>
        <h3>Adicionar nova tarefa</h3>
        <input type="text" v-model="novaTarefa" placeholder="Digite o titulo da tarefa" />
        <button @click="addTarefa">Adicionar</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "FormularioComponent",
    data() {
        return {
            novaTarefa: ''
        }
    },
    methods: {
        addTarefa() {
            if (this.novaTarefa.trim() !== '') {
                this.$emit('addTarefa', this.novaTarefa)
                this.novaTarefa = '' // Limpa o campo após adicionar
            } else {
                alert('Adcione um titulo para a tarefa.')
            }
        }
    },
})
</script>