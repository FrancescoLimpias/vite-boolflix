<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios';
import { store } from './store';
import { localeAlpha2 } from './flags.js'
import ISO6391 from 'iso-639-1';

export default {

  data() {
    return {
      store,
      localeAlpha2,
      ISO6391,
    }
  },

  components: {
    AppHeader,
    AppMain,
  },

  methods: {
    /* SEARCHes
     generic methods for movies and TV shows query
     */
    clearSearch() {
      // clear search
      store.search.query = undefined;
      store.search.nOfResults = 0;
      store.search.results = [];
    },

    getResult(movieID) {
      return store.search.results.find(movie => movie.id == movieID);
    },

    queryHome() {
      //Just for debug :p
      this.querySearch("Home");
    },

    querySearch(query) {
      this.clearSearch();

      // base URL
      const baseURL = "https://api.themoviedb.org/3/search/";

      // media types (movie/tv show...)
      const mediaTypes = [
        "movie",
        "tv",
      ]

      // ajax loop of mediaTypes
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
            store.search.nOfResults += response.data.total_results;

            // Simplify results and store
            store.search.results = store.search.results.concat(response.data.results.map((res) => {
              // movie object constructor

              // TYPE (movie/tv show)
              const type = res.title ? "movie" : "tv";

              // DISPLAY
              const title = (res.title || res.name);
              const poster = res.poster_path;

              // ORIGINALS
              const original_title = (res.original_title || res.original_name);
              const original_language = this.ISO6391.getName(res.original_language);
              const original_flag = (this.localeAlpha2[res.original_language] ? this.localeAlpha2[res.original_language] : false);

              // SCORE
              const vote_average = Math.ceil(res.vote_average * 0.5);
              const overview = res.overview;

              // DETAILS
              this.queryActors(query, type, res.id);
              this.queryGenres(query, res.genre_ids, res.id);

              let movieObj = {
                id: res.id,
                type,
                title,
                poster,
                original_title,
                original_language,
                original_flag,
                vote_average,
                overview,
              };

              return movieObj;
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

    queryActors(originQuery, type, id) {
      axios
        .get(
          "https://api.themoviedb.org/3/"
          + type
          + "/" + id
          + "/credits?"
          + "api_key=" + store.API_KEY)
        .then((res) => {

          // Another query has been issued
          if (store.search.query != originQuery) {
            return;
          }

          let cast = res.data.cast;
          cast.splice(5);
          store.search.results.find(e => e.id == id && e.type == type).actors = cast.map((e) => { return e.name });

        })
        .catch((err) => {
          console.log(err);
        }
        );
    },

    queryGenres(query, genresIDs, id) {

      // check for ids availability
      if (!store.genres.ids) {
        // ids not availables, put in queue for later
        store.genres.queue.push({ query, genresIDs, id });
        return;
      }

      // find genres
      const fullGenres = [];
      for (const genreID of genresIDs) {
        const genre = store.genres.ids.find(e => e.id == genreID);
        if (genre) {
          fullGenres.push(genre.name);
        }
      }

      // store results
      setTimeout(() => {
        this.getResult(id).genres = fullGenres;
      }, 500);
    }
  },

  mounted() {
    // Retrieve updated genre list
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?"
        + "api_key=" + store.API_KEY)
      .then((res) => {
        // store map
        store.genres.ids = res.data.genres;
      })
      .catch();
  },
}
</script>

<template>
  <AppHeader @search="querySearch" @home="queryHome" />
  <AppMain />
</template>

<style scoped>

</style>
