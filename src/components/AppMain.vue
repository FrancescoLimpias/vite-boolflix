<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <ul v-if="store.search.query">
        <li v-for="res in store.search.results">
            {{ title }}
        </li>
    </ul>
</template>