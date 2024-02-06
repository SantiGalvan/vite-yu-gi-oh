<script>
import { store } from '../../data/store.js';
import PokemonCard from './PokemonCard.vue';
export default {
    name: 'PokemonsList',
    data: () => ({ store }),
    components: { PokemonCard }
}
</script>

<template>
    <!-- Section Pokemons Cards -->
    <section id="pokemons-cards">
        <div class="row row-cols-5 g-4">
            <div class="col" v-for="pokemon in store.pokemons" :key="pokemon._id">
                <PokemonCard :type="pokemon.type1" :name="pokemon.name" :number="pokemon.number" :url="pokemon.imageUrl" />
            </div>
        </div>
    </section>
</template>