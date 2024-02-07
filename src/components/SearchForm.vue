<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'SearchForm',
    data: () => ({
        searchTerm: ''
    }),
    components: { FontAwesomeIcon },
    props: {
        placeholder: String
    },
    emits: ['get-input', 'submit-form']
}
</script>

<template>
    <form @submit.prevent="$emit('submit-form', searchTerm)">
        <div class="d-flex align-items-center ms-3">
            <input type="text" class="form-control" :placeholder="placeholder" v-model.trim="searchTerm">
            <FontAwesomeIcon icon="fa-solid fa-xmark" class="fa-2x ms-2" role="button" @click="$emit('get-input')" />
        </div>
    </form>
</template>

<style></style>