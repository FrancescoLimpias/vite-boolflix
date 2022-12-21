<script>
export default {
    props: ["data"],
}
</script>

<template>
    <div class="ResultCard">

        <!-- Poster -->
        <img v-if="data.poster" :src="'https://image.tmdb.org/t/p/w342/' + data.poster" :alt="data.title">
        <div v-else class="placeholder">
            <h4>
                {{ data.title }}
                <br/>
                [{{ data.type }}] 
            </h4>
            <div class="tape-holder">
                <i class="fa-solid fa-tape"></i>
            </div>
        </div>

        <!-- Info -->
        <div class="info">
            <ul>
                <li>
                    <span class="key">
                        Title:
                    </span>
                    {{ data.title }}
                </li>
                <li>
                    <span class="key">
                        Original Title:
                    </span>
                    {{ data.original_title }}
                </li>
                <li>
                    <span class="key">
                        Lang:
                    </span>
                    <img v-if="data.original_flag" :src="'https://flagcdn.com/w20/' + data.original_flag + '.png'"
                        alt="">
                    <span>
                        {{ " " + data.original_language }}
                    </span>
                </li>
                <li>
                    <span class="key">
                        Vote:
                    </span>
                    <span v-if="data.vote_average > 0" v-for="star in data.vote_average">
                        &#11088;
                    </span>
                    <span v-else>
                        &#9734;
                    </span>
                </li>
                <li v-if="data.actors">
                    <span class="key">
                        Actors:
                    </span>
                    <span v-for="(actor, index) in data.actors">
                        {{ actor + (index < 4 ? ", " : "")}}
                    </span>
                </li>
                <li v-if="data.genres">
                    <span class="key">
                        Genres:
                    </span>
                    <span v-for="(genre, index) in data.genres">
                        {{ genre + (index < data.genres.length - 1 ? ", " : "")}}
                    </span>
                </li>
                <li>
                    <span class="key">
                        Overview:
                    </span>
                    {{ data.overview }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ResultCard {
    position: relative;

    // Sizing
    width: 342px;
    height: 513px;

    display: flex;
    place-items: center;

    .placeholder {

        position: relative;

        // Styling
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 2rem;

        // Inner partitioning
        display: flex;
        flex-direction: column-reverse;

        h4 {
            color: snow;
        }

        .tape-holder {
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            i {
                opacity: .3;
                display: inline-block;
                font-size: 8rem;
            }
        }
    }

    &:hover .info {
        opacity: 1;
    }

    .info {
        opacity: 0;
        // Sizing & Positioning
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        // Styling
        background-color: rgba(0, 0, 0, 0.6);
        padding: 1rem;
        overflow-y: auto;

        ul {
            list-style-type: none;

            .key {
                font-size: large;
                font-weight: 600;
            }
        }
    }
}
</style>