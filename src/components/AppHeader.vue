<script>
export default {
    name: "AppHeader",

    data() {
        return {
            query: "",
        }
    },

    methods: {
        fireSearch() {

            // data validation
            if (this.query == undefined || this.query.trim().length == 0) {
                return;
            }

            // fire event
            this.$emit('search', this.query);

            // clear input field
            this.query = "";
        },
    },

    emits: [
        "search",
    ]
}
</script>

<template>
    <input type="text" name="query" placeholder="search here" v-model="this.query" @keypress.enter="fireSearch">
    <button type="submit" @click="fireSearch">🔎</button>
</template>