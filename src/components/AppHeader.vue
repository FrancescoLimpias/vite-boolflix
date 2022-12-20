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
    <!-- App Header -->
    <div class="AppHeader">

        <!-- Navbar left -->
        <div class="nav-left">
            <h1>
                Boolzapp
            </h1>
        </div>

        <!-- Navbar right -->
        <div class="nav-right">
            <input type="text" name="query" placeholder="search here" v-model="this.query" @keypress.enter="fireSearch">
            <button type="submit" @click="fireSearch">🔎</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppHeader {
    // Styling
    background-color: black;
    height: 70px;
    padding: 1rem;

    // Inner partitioning
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-left {
    h1 {
        font-size: x-large;
        font-weight: 500;
        color: red;
    }
}

.nav-right{
    // Inner partitioning
    display: flex;
    place-items: baseline space-between;
    gap: .2rem;

    &>*{
        padding: .15rem;
        border-radius: 5px;
    }
}
</style>