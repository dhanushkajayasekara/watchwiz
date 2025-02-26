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
                                isInWatchlist
                                    ? 'mdi-eye-outline'
                                    : 'mdi-eye-off-outline'
                            "
                            :variant="isInWatchlist ? 'tonal' : 'outlined'"
                            :color="isInWatchlist ? 'success' : 'default'"
                            @click="toggleWatch"
                            aria-label="Toggle watchlist for {{ movieStore.movieDetails.Title }}"
                        >
                            {{ !isInWatchlist ? "Add to " : "" }}Watchlist
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
import { computed } from "vue";
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();
const isInWatchlist = computed(() =>
    movieStore.isInWatchlist(movieStore.movieDetails.imdbID)
);

const toggleWatch = () => {
    if (isInWatchlist.value) {
        movieStore.removeFromWatchlist(movieStore.movieDetails.imdbID);
    } else {
        movieStore.addToWatchlist(movieStore.movieDetails.imdbID);
    }
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
