<template>
    <div v-for="(user, index) in users" :key="user.id">

        <p class="user" v-if="index % 2 == 0">{{ index }} => {{ user.nome }}</p>
        <p class="user-impar" v-else>
            {{ index }} => {{ user.nome }}
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ArrayComponent",
    data() {

        return {
            users: [
                {
                    id: 1,
                    nome: "João Silva",
                    email: "joao.silva@example.com"
                },
                {
                    id: 2,
                    nome: "Maria Souza",
                    email: "maria.souza@example.com"
                },
                {
                    id: 3,
                    nome: "Carlos Oliveira",
                    email: "carlos.oliveira@example.com"
                },
                {
                    id: 4,
                    nome: "Ana Pereira",
                    email: "ana.pereira@example.com"
                },
                {
                    id: 5,
                    nome: "Pedro Santos",
                    email: "pedro.santos@example.com"
                }
            ]
        }

    }
})

</script>

<style scoped>
.user {
    background: #006e09;
    width: 80%;
    margin: 5px auto;
    padding: 3px 6px;
    color: #fff;
    border-radius: 4px;
}

.user-impar {
    background: #aa0000;
    width: 80%;
    margin: 5px auto;
    padding: 3px 6px;
    color: #fff;
    border-radius: 4px;
}
</style>