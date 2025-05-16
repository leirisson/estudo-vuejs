<template>
        <div class="box has-text-weight-bold">
            <slot></slot>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: "BoxCaixa",
})
</script>

<style scoped>
.box{
    width: 95%;
    margin: auto;
    background-color: rgb(252, 231, 162);
    
}
</style>