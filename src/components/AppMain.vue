<script>
import ResultCardVue from './ResultCard.vue';
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },

    components: {
        ResultCardVue,
    }
}
</script>

<template>
    <div class="AppMain">

        <!-- Query Result -->
        <div v-if="store.search.query">

            <!-- results counter -->
            <span class="results-number">
                {{ store.search.nOfResults }} results for query "{{ store.search.query }}"
            </span>

            <!-- grid -->
            <ul class="grid">
                <li v-for="result in store.search.results">
                    <ResultCardVue :data="result" />
                </li>
            </ul>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppMain{
    .results-number{
        display: inline-block;
        margin: .4rem .8rem;
    }

    .grid{
        // Styling
        list-style-type: none;

        // Inner partitioning
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 2rem;
    }
}
</style>