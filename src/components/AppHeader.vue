<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { store } from '../data/store.js';
import TypeSelect from './TypeSelect.vue';
import SearchForm from './SearchForm.vue'
export default {
    name: 'AppHeader',
    data: () => ({ store }),
    components: { TypeSelect, FontAwesomeIcon, SearchForm },
    emits: ['option-select', 'get-input', 'submit-form']
}
</script>

<template>
    <header>
        <div class="container text-center mt-3">
            <h1 class="ms-3 fw-bolder">Pokédex Nazionale</h1>
            <div class="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon v-if="!store.isSearch" icon="fa-solid fa-magnifying-glass" class="fa-2x ms-3" role="button"
                    @click="$emit('get-input')" />
                <SearchForm v-else @get-input="$emit('get-input')" @submit-form="$emit('submit-form')"
                    placeholder="Cerca Pokemon" />
                <TypeSelect @option-select="$emit('option-select', $event)" :types="store.types" />
            </div>
        </div>
    </header>
</template>

<style></style>