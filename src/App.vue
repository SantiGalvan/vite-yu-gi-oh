<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './data/store.js';
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
export default {
    name: 'Pokedex',
    components: { AppHeader, AppMain },
    created() {
        axios.get(endpoint).then(res => {
            store.pokemons = res.data.docs;
        });
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>