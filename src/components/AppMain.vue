<script>
import PokemonsList from './pokemons/PokemonsList.vue';
import MainButtons from './MainButtons.vue';
export default {
    name: 'AppMain',
    components: { PokemonsList, MainButtons },
    emits: ['more-pokemons', 'reset']
}
</script>

<template>
    <main class="container">
        <PokemonsList />
        <MainButtons @more-pokemons="$emit('more-pokemons')" @reset="$emit('reset')" />
    </main>
</template>