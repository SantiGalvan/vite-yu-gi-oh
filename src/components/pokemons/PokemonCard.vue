<script>
export default {
    name: 'PokemonCard',
    props: {
        type: String,
        number: Number,
        name: String,
        url: String
    }
}
</script>

<template>
    <div class="card text-center my-4" :class="type.toLowerCase()">
        <img :src="url" class="card-img-top mt-3" :alt="name">
        <div class="card-body">
            <span>{{ number }}</span>
            <h5 class="card-title fw-bold">{{ name }}</h5>
            <p class="card-text">{{ type }}</p>
        </div>
    </div>
</template>

<style></style>