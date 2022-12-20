<script>
export default {
    name: "AppHeader",

    data() {
        return {
            inputQuery: "",
        }
    },

    methods: {
        fireSearch() {

            // data validation
            if (this.inputQuery == undefined || this.inputQuery.trim().length == 0) {
                return;
            }

            // fire event
            this.$emit('search', this.inputQuery);

            // clear input field
            this.query = "";
        },
    },

    emits: [
        "search",
        "home",
    ],

    mounted() {
        this.$emit("home");
    },
}
</script>

<template>
    <!-- App Header -->
    <div class="AppHeader">

        <!-- Navbar left -->
        <div class="nav-left">
            <h1 @click="$emit('home')">
                ██████╗&nbsp;&nbsp;██████╗&nbsp;&nbsp;██████╗&nbsp;██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███████╗██╗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╗██╗&nbsp;&nbsp;██╗<br>██╔══██╗██╔═══██╗██╔═══██╗██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╔════╝██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║╚██╗██╔╝<br>██████╔╝██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█████╗&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;╚███╔╝&nbsp;<br>██╔══██╗██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;██║██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██╔══╝&nbsp;&nbsp;██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██║&nbsp;██╔██╗&nbsp;<br>██████╔╝╚██████╔╝╚██████╔╝███████╗██║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;███████╗██║██╔╝&nbsp;██╗<br>╚═════╝&nbsp;&nbsp;╚═════╝&nbsp;&nbsp;╚═════╝&nbsp;╚══════╝╚═╝&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╚══════╝╚═╝╚═╝&nbsp;&nbsp;╚═╝<br>
            </h1>
        </div>

        <!-- Navbar right -->
        <div class="nav-right">
            <input type="text" name="query" placeholder="🔎 search here" v-model="this.inputQuery"
                @keypress.enter="fireSearch">
            <button type="submit" @click="fireSearch">search</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.AppHeader {
    // Positioning
    position: absolute;
    z-index: 600;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 70px;

    // Styling
    background-color: black;
    padding: 1rem;
    box-shadow: 1px 0 2px 3px rgba(0, 0, 0, 0.6);

    // Inner partitioning
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-left {
    display: flex;
    align-items: center;

    h1 {
        display: inline-block;
        // height: 55px;
        padding: .2rem;

        font-family: 'Lucida Console';
        font-size: 8px;
        // font-weight: 500;
        color: rgba(255, 0, 0, .8);
        // background-color: rgba(255, 0, 0, 0.2);
        line-height: 8px;
        overflow: hidden;
        border-radius: 15px;
    }
}

.nav-right {
    // Inner partitioning
    display: flex;
    place-items: baseline space-between;
    gap: .2rem;

    &>* {
        padding: .15rem;
        border-radius: 5px;
    }

    button {
        color: rgba(255, 0, 0, .8);
        border: 2px solid rgba(255, 0, 0, .8);
        background-color: black;
        padding: .3rem .6rem;
        font-weight: bold;

        &:hover {
            background-color: rgba(255, 0, 0, .8);
            color: snow;
        }
    }
}
</style>