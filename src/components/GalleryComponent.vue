<template>
    <v-row justify="center" align="end">
        <v-col cols="12" class="text-center">
            <h1>{{ title }}</h1>
        </v-col>
        <v-col
            v-for="movie in movieList"
            :key="movie.imdbID"
            cols="12"
            xs="6"
            sm="3"
            md="2"
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

    <!-- Item Details Dialog -->
    <search-item-details-dialog
        :show-item-details-dialog="showItemDetailsDialog"
        @close-dialog="() => (showItemDetailsDialog = false)"
    />
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";
const movieStore = useMovieStore();

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    movieList: {
        type: Array,
        required: true,
    },
});

let showItemDetailsDialog = ref(false);

const fetchDetails = (imdb) => {
    movieStore.fetchMovieDetails(imdb);

    showItemDetailsDialog.value = true;
};
</script>
