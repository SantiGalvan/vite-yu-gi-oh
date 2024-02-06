<script>
export default {
    name: 'MainButtons',
    emits: ['more-pokemons', 'reset']
}
</script>

<template>
    <!-- Section Buttons -->
    <section id="buttons" class="mb-4">
        <div class="d-flex justify-content-center gap-2">
            <button class="btn btn-primary" @click="$emit('more-pokemons')">Carica
                altri Pokemon</button>
            <button class="btn btn-warning" @click="$emit('reset')">Reset</button>
        </div>
    </section>
</template>

<style></style>