<template>
    <PostUser :post="postData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PostUser from './Post.vue';

export default defineComponent({
    name: "PainelPosts",
    components: {
        PostUser
    },
    data() {
        return {
            postData: {
                title: "Estudo de Vue.js",
                subtitle: "usando props para passar dados",
                likes: 1500
            }
        }
    }
})
</script>
