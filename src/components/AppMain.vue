<script>
import ResultCardVue from './ResultCard.vue';
import { store } from '../store.js'

export default {
    data() {
        return {
            store,
        }
    },

    methods: {
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
                    <ResultCardVue :data="result"/>
                </li>
            </ul>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppMain {

    margin-top: 70px;
    height: calc(100vh - 70px);
    overflow-y: auto;

    .results-number {
        display: inline-block;
        margin: 1rem 15rem;
    }

    .grid {
        // Styling
        list-style-type: none;
        padding: .5rem;

        // Inner partitioning
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
}
</style>