<script>
export default{
    name: "AppHeader",

    data(){
        return {
            query: "",
        }
    },

    emits: [
        "search",
    ]
}
</script>

<template>
    <input type="text" name="query" placeholder="search here" v-model="this.query">
    <button type="submit" @click="$emit('search', query)">🔎</button>
</template>