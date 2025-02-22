<template>
    <article
        v-if="movieStore.movieDetails.imdbID"
        aria-labelledby="dialog-title"
    >
        <v-row>
            <!-- Movie Poster -->
            <v-col cols="12" sm="4" class="d-flex align-stretch">
                <v-img
                    :src="movieStore.movieDetails.Poster"
                    :alt="`${movieStore.movieDetails.Title} movie poster`"
                    rounded="lg"
                    max-height="400"
                ></v-img>
            </v-col>

            <!-- Movie Details -->
            <v-col cols="12" sm="8" class="d-flex flex-column">
                <v-row>
                    <!-- Watchlist Button -->
                    <v-col
                        cols="12"
                        class="d-flex justify-center justify-sm-end"
                    >
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
                            aria-label="Toggle watchlist for {{ movieStore.movieDetails.Title }}"
                        >
                            {{ !isWatchlist ? "Add to " : "" }}Watchlist
                        </v-btn>
                    </v-col>

                    <!-- Movie Title -->
                    <v-col cols="12">
                        <h2 id="dialog-title">
                            {{ movieStore.movieDetails.Title }}
                        </h2>
                    </v-col>

                    <!-- Movie Meta Info -->
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

        <!-- Separator -->
        <hr class="my-3" />

        <!-- Movie Plot -->
        <v-row>
            <v-col cols="12">
                <section aria-labelledby="plot-title">
                    <h3 id="plot-title" class="mb-2">Plot</h3>

                    <p>
                        {{ movieStore.movieDetails.Plot }}
                    </p>
                </section>
            </v-col>
        </v-row>

        <hr class="my-3" />

        <!-- Movie Ratings -->
        <section aria-labelledby="ratings-title">
            <h3 id="ratings-title" class="mb-2">Ratings</h3>
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
        </section>
    </article>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { useMovieStore } from "@/stores/movieStore";
import {
    addToWatchlist,
    removeFromWatchlist,
    isMovieInWatchlist,
} from "@/services/watchlistService";

const movieStore = useMovieStore();
const isWatchlist = ref(false);

watch(
    () => movieStore.movieDetails.imdbID,
    async (newImdbID) => {
        if (newImdbID) {
            await nextTick();
            isWatchlist.value = isMovieInWatchlist(newImdbID);
        }
    },
    { immediate: true }
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
