<template>
    <div>
        <h1>{{ post.title }}</h1>
        <h2>{{ post.subtitle }}</h2>
        <p>Likes: {{ post.likes }}</p>
    </div>
</template>

<script lang="ts">
import IPost from '@/interfaces/IPost';
import { defineComponent, PropType } from 'vue'


export default defineComponent({
    name: "PostUser",
    props: {
        post: {
            type: Object as PropType<IPost>,
            required: true
        }
    }
})

</script>