<template>
    <v-container>
        <div v-if="!movieStore.error">
            <gallery-component
                title="Popular Movies"
                :movie-list="movieStore.popularMovies"
            />
            <v-divider
                class="border-opacity-50 mb-10 mx-16"
                color="info"
            ></v-divider>
            <gallery-component
                title="Popular Series"
                :movie-list="movieStore.popularSeries"
            />
        </div>
    </v-container>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();

onMounted(() => {
    movieStore.fetchMovies("Rise", "popularMovies", "movie");
    movieStore.fetchMovies("Good", "popularSeries", "series");
});
</script>

<style lang="scss" scoped></style>
