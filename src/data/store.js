import { reactive } from "vue";

export const store = reactive({
    pokemons: [],
    types: [],
    numberPokemons: 10,
    isSearch: false
})