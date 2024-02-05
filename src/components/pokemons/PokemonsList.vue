<script>
import PokemonCard from './PokemonCard.vue';
export default {
    name: 'PokemonsList',
    components: { PokemonCard }
}
</script>

<template>
    <!-- Section Pokemons Cards -->
    <section id="pokemons-cards">
        <div class="row row-cols-5 g-4">
            <PokemonCard />
        </div>
    </section>
</template>