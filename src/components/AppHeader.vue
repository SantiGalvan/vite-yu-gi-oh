<script>
import { store } from '../data/store.js';
import TypeSelect from './TypeSelect.vue';
export default {
    name: 'AppHeader',
    data: () => ({ store }),
    components: { TypeSelect },
    emits: ['option-select']
}
</script>

<template>
    <header>
        <div class="container text-center mt-3">
            <h1 class="ms-3 fw-bolder">Pokédex Nazionale</h1>
            <div class="d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" class="fa-2x ms-3" role="button" />
                <TypeSelect @option-select="$emit('option-select', $event)" :types="store.types" />
            </div>
        </div>
    </header>
</template>

<style></style>