/* Global Store<

*/

import { reactive } from "vue";

export const store = reactive({

    // MVDB api
    API_KEY: "d66e4d04778496fe9c54c434659827fc",

    /* Search Instance
     - object "filled" by search method in App.vue
     - if search.query is defined, search holds current search results
     - if search.query is undefined, no search is actually active (initial state)
     */
    search: {

        // query - what have been searched
        query: undefined,

        // nOfResults - number of matches
        nOfResults: 0,

        // results - matching results (movies/tv shows...)
        results: [

            // hic sunt movies 😜

        ]
    }

});