<script>
export default {
    name: 'TypeSelect',
    data: () => ({
        selectOption: 'All'
    }),
    emits: ['option-select'],
    props: {
        types: Array
    }
}
</script>

<template>
    <select class="form-select me-3" v-model="selectOption" @click="$emit('option-select', selectOption)">
        <option selected>All</option>
        <option v-for="(type, i) in types" :key="i" :value="type">{{ type }}</option>
    </select>
</template>

<style></style>