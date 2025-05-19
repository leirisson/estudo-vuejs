<template>
    <h1 :class="{ 'titulo': estiloTitulo }">Titulo da Pagina</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur temporibus praesentium sit sequi! Iure
        quia dolore aliquid ipsum suscipit saepe delectus sed sapiente. Praesentium modi maxime delectus nobis unde.
    </p>
    <h2 :class="{'sub-titulo': subTitulo }">Sub titulo</h2>
    <p :class="['text', { 'text-subText': textSubText }]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        nobis mollitia aliquam quas impedit quod
        asperiores? Quaerat quos officiis obcaecati. Dolorum dolores vitae quam corporis ex? Dolor necessitatibus
        perferendis vel?
    </p>

    <h3 :class="tituloAzul">
        titulo azul
    </h3>


</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "EstilosComponent",
    data() {
        return {
            estiloTitulo: true,
            subTitulo: true,
            textSubText: true,
            tituloAzul: {'color':'red', 'font-size':'20px'}
        }
    }
})
</script>

<style>
.titulo{
    font-size: 40px;
    font-weight: bold;
    color: gray;
}

.sub-titulo{
    font-size: 16px;
    color: red;
    padding: 1rem;

}

.text {
    text-align: justify;
    line-height: 1.5rem;
    color: green;
}

.text-subText {
    font-size: 20px;
    background-color: #cecece;
    margin: 2rem;
    padding: 1rem;
    border-radius: 4px;
}
</style>