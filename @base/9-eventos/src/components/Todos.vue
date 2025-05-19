<template>
    <div class="todos">
        <div class="esquerda">
            <h2>Tarefas em aberto</h2>
            <ul class="naoCompletas" v-for="todo in naoCompletas" :key="todo.id">
                <li>
                    <input type="checkbox" v-model="todo.completed">
                    {{ todo.title }}
                </li>
            </ul>
        </div>

        <div class="direita">
            <h2>Tarefas completas</h2>
            <ul class="completas" v-for="todo in completas" :key="todo.id">
                <li :class="{ 'completas': todo.completed }">
                    <input type="checkbox" v-model="todo.completed">
                    {{ todo.title }}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "TodoList",
    data() {
        return {
            todos: [
                {
                    id: 1,
                    userId: 101,
                    title: "Fazer compras",
                    description: "Comprar leite, ovos e pão no mercado",
                    completed: false
                },
                {
                    id: 2,
                    userId: 102,
                    title: "Estudar JavaScript",
                    description: "Rever conceitos de array e objetos",
                    completed: true
                },
                {
                    id: 3,
                    userId: 101,
                    title: "Limpar a casa",
                    description: "Aspirar e passar pano no chão",
                    completed: false
                },
                {
                    id: 4,
                    userId: 103,
                    title: "Fazer exercícios",
                    description: "Correr por 30 minutos no parque",
                    completed: false
                },
                {
                    id: 5,
                    userId: 102,
                    title: "Ler livro",
                    description: "Ler capítulo 5 do livro de React",
                    completed: true
                },
                {
                    id: 6,
                    userId: 104,
                    title: "Marcar médico",
                    description: "Agendar consulta com cardiologista",
                    completed: false
                },
                {
                    id: 7,
                    userId: 103,
                    title: "Preparar apresentação",
                    description: "Criar slides para reunião de equipe",
                    completed: true
                },
                {
                    id: 8,
                    userId: 101,
                    title: "Regar plantas",
                    description: "Regar todas as plantas do jardim",
                    completed: false
                },
                {
                    id: 9,
                    userId: 104,
                    title: "Organizar armário",
                    description: "Separar roupas para doação",
                    completed: false
                },
                {
                    id: 10,
                    userId: 102,
                    title: "Escrever relatório",
                    description: "Finalizar relatório mensal de atividades",
                    completed: true
                }
            ]
        }
    },
    computed: {
        naoCompletas() {
            return this.todos.filter(todo => !todo.completed)
        },

        completas() {
            return this.todos.filter(todo => todo.completed)
        }
    }
})

</script>

<style scoped>
.todos {
    display: flex;
    justify-content: space-around;
    margin: auto;
    gap: 1rem;
}

.esquerda {
    background-color: rgba(255, 255, 0, 0.664);
    padding: 1rem;
    border-radius: 5px;

}

.completas {
    text-decoration: line-through;
}

.direita {
    background-color: rgba(9, 255, 0, 0.664);
    padding: 1rem;
    border-radius: 5px;
}

.naoCompletas,
.completas {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: left;
}
</style>