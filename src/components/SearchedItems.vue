<template>
    <v-row align="end">
        <v-col
            cols="12"
            sm="12"
            md="6"
            lg="4"
            v-for="movie in movieStore.searchedMovies"
            :key="movie.imdbID"
        >
            <v-card rounded="lg" hover @click="fetchDetails(movie.imdbID)">
                <v-img :src="movie.Poster" cover></v-img>

                <v-card-item class="d-none d-sm-flex">
                    <v-card-title class="text-subtitle-2">
                        {{ movie.Title }}
                    </v-card-title>

                    <v-card-subtitle class="text-medium-emphasis">
                        <span class="me-1">{{ movie.Year }}</span>
                    </v-card-subtitle>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";
const movieStore = useMovieStore();

const fetchDetails = (imdb) => {
    movieStore.fetchMovieDetails(imdb);
};
</script>

<style lang="scss" scoped></style>
