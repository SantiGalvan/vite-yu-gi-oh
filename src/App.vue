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
        }
    }
}
</script>

<template>
    <AppHeader @option-select="fetchTypeSelect" />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>