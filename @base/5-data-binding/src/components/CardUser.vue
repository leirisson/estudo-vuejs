<template>
    <div class="perfil" v-for="user in users" :key="user.id">
        <div class="card">
            <div class="avatar">
                <img :src="user.imgSrc || 'https://placehold.co/600x400'" :alt="user.imgAlt">
            </div>
            <div class="body">
                <p class="nome">
                    {{ user.nome }}
                </p>
                <div class="email">
                    {{ user.email }}
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CardUser",
    data() {
        return {
            users: [
                {
                    id: 1,
                    nome: "Leirisson Souza",
                    email: "leirisson.souza@example.com",
                    imgSrc: "https://github.com/leirisson.png",
                    imgAlt: "foto do perfil"
                },
                {
                    id: 2,
                    nome: "Jhon Snow",
                    email: "jhon.snow@example.com",
                    imgSrc: "",
                    imgAlt: "foto do perfil"
                },
                {
                    id: 3,
                    nome: "Maria Silva",
                    email: "maria.silva@example.com",
                    imgSrc: "https://github.com/mariasilva.png",
                    imgAlt: "foto de perfil da Maria"
                },
                {
                    id: 4,
                    nome: "Carlos Oliveira",
                    email: "carlos.oliveira@example.com",
                    imgSrc: "https://github.com/carlosoliveira.png",
                    imgAlt: "foto de perfil do Carlos"
                },
                {
                    id: 5,
                    nome: "Ana Santos",
                    email: "ana.santos@example.com",
                    imgSrc: "",
                    imgAlt: "foto de perfil da Ana"
                }
            ]
        }
    }
})
</script>
<style scoped>
.card {
    background: #111111;
    color: #fff;
    display: flex;
    margin: 2rem;
    border-radius: 4px;
    column-gap: 1rem;
}


.avatar>img {
    max-width: 200px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 100%;
}

.body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;
}
</style>