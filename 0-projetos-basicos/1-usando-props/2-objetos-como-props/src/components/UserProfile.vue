<template>
    <div class="card">
        <div class="cabecalho">
            <img :src="user.url" alt="foto do perfil">
        </div>
        <div class="body">
            <p>{{ user.name }}</p>
            <p>Idade: {{ user.age }}</p>
            <p>Email: {{ user.email }}</p>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IUser from '../interfaces/IUser'
import { PropType } from 'vue'

export default defineComponent({
    name: "UserComponent",
    props: {
        user: {
            type: Object as PropType<IUser>,
            required: true,
        }
    }
})
</script>

<style scoped>
.card{
    background-color: rgb(155, 167, 236);
    padding: 1rem;
    width: 20rem;
    margin: auto;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.6);
}
.cabecalho > img{
    max-width: 100%;
    border-radius: 100%;
}
.body{
    text-align: center;
    font-weight: bold;
    line-height: .5rem;
}
</style>