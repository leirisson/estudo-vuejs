<template>
    <!-- alert-succes alert-danger -->
    <div :class="baseclass">
        Formulario enviado com sucesso.
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "ComponenteFilho",
    props: ['variant'],
    computed: {
        baseclass() {
            return ['alert', this.variant ? `alert-${this.variant}` : '']
        }
    }

})

</script>

<style scoped>
.alert {
    padding: 2rem;
    border-radius: 6px;
    border: 1px solid #000;
    max-width: 400px;
    margin: auto;
    background: #ddd;
}

.alert-succes {
    background: #42b983;
    color: #fff;
}

.alert-danger {
    background: rgb(243, 18, 18);
    color: #fff;
}


</style>