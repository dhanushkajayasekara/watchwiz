<template>
    <v-container>
        <!-- Page Title -->
        <header class="mb-10 d-flex justify-center align-center">
            <h1 class="text-h4 font-weight-bold text-center">Watchlist</h1>
            <v-btn
                size="small"
                class="ml-4"
                icon
                aria-label="Refresh Watchlist"
                @click="movieStore.fetchWatchlistMovies()"
            >
                <v-icon>mdi-refresh</v-icon>
            </v-btn>
        </header>

        <v-row justify="center" align="end">
            <v-col cols="12" lg="8">
                <v-row justify="center" align="end">
                    <v-col
                        v-for="movie in watchlistMovies"
                        :key="movie.imdbID"
                        cols="12"
                        xs="6"
                        sm="3"
                    >
                        <poster-card :movie="movie" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <!-- Floating button -->
        <v-btn
            icon
            class="btn-float"
            aria-label="Refresh Watchlist"
            @click="movieStore.fetchWatchlistMovies()"
        >
            <v-icon>mdi-refresh</v-icon>
        </v-btn>
    </v-container>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";
import { computed } from "vue";

const movieStore = useMovieStore();
const watchlistMovies = computed(() => movieStore.getWatchlistMovies);

onMounted(() => {
    movieStore.fetchWatchlistMovies();
});
</script>

<style lang="scss" scoped>
.btn-float {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
}
</style>
