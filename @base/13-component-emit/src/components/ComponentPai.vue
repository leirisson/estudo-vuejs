<template>
    <div class="alertas">

        <ComponentFilho v-if="showAlert"   @close="aoserClicado" variant="danger" text="Error ao tentar cadastrar."/>

    </div>

</template>

<script>
import { defineComponent } from 'vue'
import ComponentFilho from './ComponentFilho.vue';

export default defineComponent({
    name: "ComponentPai",
    data(){
        return {
             showAlert: true
        }
       
    },
    components: {
        ComponentFilho
    },
    methods: {
        aoserClicado(){
           this.showAlert = false
        }
    }
})
</script>


<style scoped>

.alertas{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

</style>