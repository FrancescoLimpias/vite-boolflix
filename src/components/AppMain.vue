<script>
import { store } from '../store.js'
import { localeAlpha2 } from '../flags.js'

export default {
    data() {
        return {
            store,
            localeAlpha2,
        }
    },

    methods: {
        getFlagByLocale(locale) {

            if (this.localeAlpha2[locale]) {
                return `https://flagcdn.com/w20/${this.localeAlpha2[locale]}.png`;
            } else {
                return false;
            }

        },
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

                <img v-if="res.poster" :src="'https://image.tmdb.org/t/p/w342/' + res.poster" alt="">

                <br>Original Title: {{ res.original_title }}
                <br>

                <img v-if="getFlagByLocale(res.original_language)" :src="getFlagByLocale(res.original_language)" alt="">
                <span v-else>
                    Original Lang: {{ res.original_language }}
                </span>
                
                <br>Vote: {{ res.vote_average }}
            </li>
        </ul>

    </div>
</template>