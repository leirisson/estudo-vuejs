<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import { PropType } from 'vue';
import ITarefa from '@/interfaces/ITarefa';
import BoxCaixa from './Box.vue';


export default defineComponent({
    name: "TarefaTask",
    components: {
        Cronometro,
        BoxCaixa
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }

    }
})
</script>

<template>
    <BoxCaixa>
        <div class="column is-7">
            {{ tarefa.descricao || "Tarefa sem descrição 🤦‍♂️" }}
        </div>
        <div class="column">
            <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
    </BoxCaixa>
</template>


<style scoped>
.box {
    background: #FAF0CA;
    color: rgb(63, 63, 63);
}
</style>