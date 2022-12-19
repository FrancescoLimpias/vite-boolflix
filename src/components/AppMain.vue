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
            Title: {{ res.title }}
            <br>Original Title: {{ res.original_title }}
            <br>Original Lang: {{ res.original_language }}
            <br>Vote: {{ res.vote_average }}
        </li>
    </ul>
</template>