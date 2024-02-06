<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'SearchForm',
    components: { FontAwesomeIcon },
    emits: ['get-input']
}
</script>

<template>
    <form @submit.prevent="">
        <div class="d-flex align-items-center ms-3">
            <input type="text" class="form-control" placeholder="Cerca Pokemon">
            <FontAwesomeIcon icon="fa-solid fa-xmark" class="fa-2x ms-2" role="button" @click="$emit('get-input')" />
        </div>
    </form>
</template>

<style></style>