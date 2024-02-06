<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './data/store.js';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
const endpointType = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1'
export default {
    name: 'Pokedex',
    components: { AppHeader, AppMain },
    data: () => ({ store }),
    created() {
        this.fetchPokemons(endpoint),
            this.fetchPokemonsType(endpointType)
    },
    methods: {
        fetchPokemons(endpoint) {
            axios.get(endpoint).then(res => {
                store.pokemons = res.data.docs;
            });
        },
        fetchPokemonsType(endpoint) {
            axios.get(endpoint).then(res => {
                store.types = res.data;
            });
        },
        fetchTypeSelect(option) {
            const endpointType = `${endpoint}?eq[type1]=${option}`
            this.fetchPokemons(endpointType)

            if (option === 'All') {
                this.fetchPokemons(endpoint)
            }
        },
        morePokemons(number) {
            number += 10;
            this.store.numberPokemons = number;
            const endpointMorePokemons = `${endpoint}?per=${number}`;
            this.fetchPokemons(endpointMorePokemons);
        },
        resetPokemons() {
            this.fetchPokemons(endpoint);
            this.store.numberPokemons = 10;
        }
    }
}
</script>

<template>
    <AppHeader @option-select="fetchTypeSelect" />
    <AppMain @more-pokemons="morePokemons(store.numberPokemons)" @reset="resetPokemons" />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>