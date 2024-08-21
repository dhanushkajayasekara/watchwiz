<template>
    <div v-if="movieStore.movieDetails.imdbID">
        <v-row>
            <v-col cols="12" sm="4" class="d-flex align-stretch">
                <v-img
                    :src="movieStore.movieDetails.Poster"
                    rounded="lg"
                    max-height="400"
                ></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="d-flex flex-column">
                <v-row>
                    <v-col cols="12" align="end">
                        <v-btn
                            class="text-none"
                            :prepend-icon="
                                isWatchlist
                                    ? 'mdi-eye-outline'
                                    : 'mdi-eye-off-outline'
                            "
                            :variant="isWatchlist ? 'tonal' : 'outlined'"
                            :color="isWatchlist ? 'success' : 'default'"
                            @click="toggleWatch"
                        >
                            {{ !isWatchlist ? "Add to " : "" }}Watchlist
                        </v-btn>
                    </v-col>
                    <v-col cols="12">
                        <h1>{{ movieStore.movieDetails.Title }}</h1>
                    </v-col>
                    <v-col cols="12">
                        <v-chip color="default" size="small">
                            {{ movieStore.movieDetails.Runtime }}
                        </v-chip>
                        <v-chip class="mx-2" color="success" size="small">
                            {{ movieStore.movieDetails.Year }}
                        </v-chip>
                        {{ movieStore.movieDetails.Genre }}
                    </v-col>
                    <v-col cols="12">
                        <v-chip color="info" size="small"> Directed By </v-chip>
                        {{ movieStore.movieDetails.Director }}
                    </v-col>
                    <v-col cols="12">
                        <v-chip color="info" size="small"> Written By </v-chip>
                        {{ movieStore.movieDetails.Writer }}
                    </v-col>
                    <v-col cols="12">
                        <v-chip color="info" size="small"> Actors </v-chip>
                        {{ movieStore.movieDetails.Actors }}
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <hr class="my-3" />
        <v-row>
            <v-col cols="12">
                <p>
                    {{ movieStore.movieDetails.Plot }}
                </p>
            </v-col>
        </v-row>
        <hr class="my-3" />
        <v-row>
            <v-col
                cols="12"
                sm="4"
                v-for="rating in movieStore.movieDetails.Ratings"
                :key="rating.Source"
            >
                <v-card
                    variant="outlined"
                    class="mx-auto"
                    color="success"
                    :subtitle="rating.Source"
                    :title="rating.Value"
                    hover
                    rounded="lg"
                >
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";
import {
    addToWatchlist,
    removeFromWatchlist,
    isMovieInWatchlist,
} from "@/services/watchlistService";

const movieStore = useMovieStore();
const isWatchlist = ref(false);

onMounted(() => {
    setTimeout(() => {
        isWatchlist.value = isMovieInWatchlist(movieStore.movieDetails.imdbID);
    }, 200);
});

watch(
    () => movieStore.movieDetails,
    (newCount, oldCount) => {
        isWatchlist.value = isMovieInWatchlist(movieStore.movieDetails.imdbID);
    }
);

const toggleWatch = () => {
    if (isWatchlist.value) {
        removeFromWatchlist(movieStore.movieDetails.imdbID);
        movieStore.watchlistMovies = movieStore.watchlistMovies.filter(
            (movie) => movie.imdbID !== movieStore.movieDetails.imdbID
        );
    } else {
        addToWatchlist(movieStore.movieDetails.imdbID);
    }
    isWatchlist.value = !isWatchlist.value;
};
</script>

<style lang="scss" scoped>
.col-content {
    max-height: none;
    overflow-y: auto;
}

@media (max-width: 960px) {
    .col-content {
        max-height: 500px;
    }
}
</style>
