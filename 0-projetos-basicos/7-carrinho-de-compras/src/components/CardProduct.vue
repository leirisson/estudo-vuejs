<template>
    <div class="product-card">
        <div class="card-img">
            <img :src="image" alt="" srcset="">
        </div>
        <div class="card-body">
            <h2>{{ name }}</h2>
            <p>Price: <span>{{ price }}</span></p>
            <p>Description: <span>{{ description }}</span></p>
            <button @click="addCarrinho">Adicionar ao carrinho</button>
        </div>

    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "CarProduct",
    emits:['add-carrinho'],
    props: {
        name: String,
        price: Number,
        image: String,
        description: String
    },
    methods: {
        addCarrinho() {
            this.$emit('add-carrinho', {
                 name: this.name, 
                 price: this.price
                 })
        }
    }
})
</script>

<style scoped>
.product-card {
    display: flex;
    flex-direction: row;
    background-color: rgb(36, 36, 36);
    padding: 1rem;
    max-width: 400px;
    border-radius: 5px;
    gap: .5rem;
    flex-wrap: wrap;
    margin: auto;

}

.card-img {
    max-width: 100%;
}

.card-body {
    display: flex;
    flex-direction: column;
    align-items: first baseline;
    color: #fff;
}
</style>