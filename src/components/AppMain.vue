<script>
import PokemonsList from './pokemons/PokemonsList.vue';
export default {
    name: 'AppMain',
    components: { PokemonsList }
}
</script>

<template>
    <main class="container">
        <PokemonsList />
    </main>
</template>