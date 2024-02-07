<script>
export default {
    name: 'TypeSelect',
    data: () => ({
        selectOption: ''
    }),
    emits: ['option-select'],
    props: {
        types: Array
    }
}
</script>

<template>
    <select class="form-select me-3" v-model="selectOption" @change="$emit('option-select', selectOption)">
        <option value="">All</option>
        <option v-for="(type, i) in types" :key="i" :value="type">{{ type }}</option>
    </select>
</template>

<style></style>