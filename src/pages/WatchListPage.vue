<template>
    <v-container>
        <v-row justify="center" align="end">
            <v-col cols="12" class="d-flex justify-center align-center">
                <h1>Watchlist</h1>
                <v-btn
                    size="small"
                    class="ml-4"
                    icon
                    @click="movieStore.fetchWatchlistMovies()"
                >
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12" lg="8">
                <v-row justify="center" align="end">
                    <v-col
                        v-for="movie in movieStore.watchlistMovies"
                        :key="movie.imdbID"
                        cols="12"
                        xs="6"
                        sm="3"
                    >
                        <v-card
                            class="mx-auto my-12"
                            rounded="lg"
                            hover
                            @click="fetchDetails(movie.imdbID)"
                        >
                            <v-img :src="movie.Poster" cover></v-img>

                            <v-card-item>
                                <v-card-title>{{ movie.Title }}</v-card-title>

                                <v-card-subtitle>
                                    <span class="me-1">{{ movie.Year }}</span>
                                </v-card-subtitle>
                            </v-card-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-btn
            icon
            class="btn-float"
            @click="movieStore.fetchWatchlistMovies()"
        >
            <v-icon>mdi-refresh</v-icon>
        </v-btn>

        <!-- Item Details Dialog -->
        <search-item-details-dialog
            :show-item-details-dialog="showItemDetailsDialog"
            @close-dialog="() => (showItemDetailsDialog = false)"
        />
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();

onMounted(() => {
    movieStore.fetchWatchlistMovies();
});

let showItemDetailsDialog = ref(false);

const fetchDetails = (imdb) => {
    movieStore.fetchMovieDetails(imdb);
    showItemDetailsDialog.value = true;
};
</script>

<style lang="scss" scoped>
.btn-float {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
}
</style>
