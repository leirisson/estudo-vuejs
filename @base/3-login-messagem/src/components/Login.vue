<template>
    <div>
        <button @click="isLoggedIn = !isLoggedIn">alterar Login</button>
        <p v-if="isLoggedIn"> ✅ - Você está logado</p>
        <p v-else> 🚫 - você não está logado</p>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: "LoginSystem",
    data() {
        return {
            isLoggedIn: false,
        }
    },
    

})
</script>