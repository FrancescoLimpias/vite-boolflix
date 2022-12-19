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
    <div v-if="store.search.query">
        <span>{{ store.search.nOfResults }}</span>
        <ul>
            <li v-for="res in store.search.results">
                Title: {{ res.title }}
                {{ res.type }}

                <div v-if="res.poster">
                    <br>
                    <img :src="'https://image.tmdb.org/t/p/w342/' + res.poster" alt="">
                </div>

                <br>Original Title: {{ res.original_title }}
                <br>

                <img v-if="res.original_flag" :src="'https://flagcdn.com/w20/' + res.original_flag + '.png'" alt="">
                <span v-else>
                    Original Lang: {{ res.original_language }}
                </span>

                <br>Vote: {{ res.vote_average }}
            </li>
        </ul>

    </div>
</template>