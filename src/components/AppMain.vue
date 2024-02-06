<script>
import PokemonsList from './pokemons/PokemonsList.vue';
import MainButtons from './MainButtons.vue';
export default {
    name: 'AppMain',
    components: { PokemonsList, MainButtons }
}
</script>

<template>
    <main class="container">
        <PokemonsList />
        <MainButtons />
    </main>
</template>