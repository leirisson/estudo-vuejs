<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroTempo :tempo-em-segundos="tempoEmSegundos" />

        <BotaoBtn @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
        <BotaoBtn @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroTempo from './Cronometro.vue';
import BotaoBtn from './Botao.vue';

export default defineComponent({
    name: "TemporizadorTempo",
    emits: ['aoTemporizadorFinalizado'],
    components: {
        CronometroTempo,
        BotaoBtn
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        }
    },

    methods: {
        iniciar() {
            // começa a contegem
            // 1seg = 1000 ms
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1
            }, 1000)

        },

        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0
        }
    },
})
</script>