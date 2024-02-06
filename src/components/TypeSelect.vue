<script>
export default {
    name: 'TypeSelect',
    data: () => ({
        types: [
            "Bug",
            "Dark",
            "Dragon",
            "Electric",
            "Fairy",
            "Fighting",
            "Fire",
            "Flying",
            "Ghost",
            "Grass",
            "Ground",
            "Ice",
            "Normal",
            "Poison",
            "Psychic",
            "Rock",
            "Steel",
            "Water"
        ],
        selectOption: 'All'
    })
}
</script>

<template>
    <select class="form-select me-3" v-model="selectOption">
        <option selected>All</option>
        <option v-for="(type, i) in types" :key="i" :value="type">{{ type }}</option>
    </select>
</template>

<style></style>