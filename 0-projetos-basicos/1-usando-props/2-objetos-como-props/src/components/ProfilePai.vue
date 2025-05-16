<template>
    <UserProfile :user="userData"/>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import UserProfile from './UserProfile.vue';

export default defineComponent({
    name: "ProfilePai",
    components: {
        UserProfile
    },
    data(){
        return {
            userData: {
                name: "Leirisson",
                age: 28,
                email: "Leirisson@exemplo.com",
                url: "https://github.com/leirisson.png"
            }
        }
    }
})
</script>

<style scoped></style>
