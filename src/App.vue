<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';
import { store } from './store';

export default {

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    /* SEARCH
     generic method for movies and TV shows query
     */
    search(query) {

      // clear search
      store.search.query = undefined;
      store.search.nOfResults = 0;
      store.search.results = [];

      // base URL
      const baseURL = "https://api.themoviedb.org/3/search/";

      // media types (movie/tv show...)
      const mediaTypes = [
        "movie",
        "tv",
      ]

      // ajax loop in mediaTypes
      for (const mediaType of mediaTypes) {

        axios
          // ajax request
          .get(
            baseURL
            + mediaType
            + "?" + "api_key=" + store.API_KEY
            + "&" + "query=" + query
          )

          // ajax response
          .then((response) => {
            // DEBUG, then remove
            console.log(response.data);

            // Store query
            store.search.query = query;

            // Store results number
            store.search.nOfResults += response.data.results.length;

            // Simplify results and store
            store.search.results = store.search.results.concat(response.data.results.map((res) => {
              return {
                type: res.title ? "MOVIE" : "TV",
                title: (res.title || res.name),
                original_title: (res.original_title || res.original_name),
                original_language: res.original_language,
                vote_average: Math.ceil(res.vote_average * 0.5),
                poster: res.poster_path,
              };
            }));
          }

          )

          // ajax response error
          .catch((err) => {
            // DEBUG error handling
            console.log("AXIOS: ");
            console.log(err);
          }
          );
      }
    },
  },
}
</script>

<template>
  <AppHeader @search="search" />
  <AppMain />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
