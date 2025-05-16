<template>
    <div class="box">
        <div class="column is-7">
            {{ tarefa.descricao }}
        </div>
        <div class="column">
            <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import { PropType } from 'vue';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
    name: "TarefaTask",
    components: {
        Cronometro
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }

    }
})
</script>

<style scoped>
.box {
    background: #FAF0CA;
    color: rgb(63, 63, 63);
}
</style>