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

      // data validation
      if(query == undefined || query.trim().length == 0){
        return;
      }

      // base URL
      const baseURL = "https://api.themoviedb.org/3/search/";

      // media types (movie/tv show...)
      const mediaTypes = [
        "movie",
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
            store.search.nOfResults = response.data.results.length;

            // Simplify results and store
            store.search.results = response.data.results.map((res) => {
              return res;
            });
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
  <AppHeader @search="search"/>
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
