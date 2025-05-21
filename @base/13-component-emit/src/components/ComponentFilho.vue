<template>
    <div :class="classBase">
        {{ text }}

        <button @click="aoClicar()" class="close">X</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: "ComponentFilho",
    props: {
        variant: String,
        text: String
    },
    methods: {
        aoClicar(){
            this.$emit("close")
            console.log('clicou')
        }
    },
    computed: {
        classBase() {
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        }
    }
})
</script>

<style scoped>
.alert {
    padding: 2rem;
    background: orange;
    color: black;
    max-width: 400px;
    border: 1px solid #000;
    border-radius: 4px;
    margin: auto;

    position: relative;
}

.alert-danger {
    background: red;
    color: #fff;
}

.alert-succes {
    background-color: blue;
    color: #fff;
}

.close{
    position: absolute;
    top: 0;
    right: 0;
    background: #000;
    color: #fff;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
}
</style>