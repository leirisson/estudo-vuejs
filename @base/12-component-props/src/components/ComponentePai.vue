<template>
    <div class="alertas">
        <ComponenteFilho />
        <ComponenteFilho variant="danger" />
        <ComponenteFilho variant="succes" />
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import ComponenteFilho from './ComponenteFilho.vue';

export default defineComponent({
    name: "ComponentePai",
    components: {
        ComponenteFilho
    }
})

</script>

<style scoped>
.alertas {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>