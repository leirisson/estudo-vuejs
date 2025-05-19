<template>
    <div>
        <input type="text" v-model="texto" placeholder="digite algo">
        <p>Texto invertido: {{ invert }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TextInvert",
    data() {
        return {
            texto: ''
        }
    },
    computed: {
        invert() {
            return this.texto.split('').reverse().join('')
        }
    }

})

</script>