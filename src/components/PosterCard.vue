<template>
    <v-card
        :class="{ 'mx-auto my-12': margins }"
        rounded="lg"
        hover
        tabindex="0"
        role="button"
        :aria-label="`View details of ${movie.Title}`"
        @click="fetchDetails(movie.imdbID)"
        @keypress.enter="fetchDetails(movie.imdbID)"
        @keydown.space.prevent="fetchDetails(movie.imdbID)"
    >
        <v-img :src="movie.Poster" cover :alt="`${movie.Title} poster`"></v-img>

        <v-card-item>
            <v-card-title>
                <h2 :class="`text-subtitle-${xs ? 1 : 2}`">
                    {{ movie.Title }}
                </h2>
            </v-card-title>

            <v-card-subtitle>
                {{ movie.Year }}
            </v-card-subtitle>
        </v-card-item>
    </v-card>

    <!-- Movie Details Dialog -->
    <movie-details-dialog
        :show-movie-details-dialog="showMovieDetailsDialog"
        @close-dialog="() => (showMovieDetailsDialog = false)"
    />
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";
import { useDisplay } from "vuetify";
import { useRoute } from "vue-router";

const movieStore = useMovieStore();
const { xs } = useDisplay();

const route = useRoute();
const isSearchRoute = computed(() => route.name === "search");

const props = defineProps({
    movie: {
        type: Object,
        required: true,
    },
    margins: {
        type: Boolean,
        default: false,
    },
});

let showMovieDetailsDialog = ref(false);

const fetchDetails = (imdb) => {
    movieStore.fetchMovieDetails(imdb);
    showMovieDetailsDialog.value = isSearchRoute.value
        ? Boolean(xs.value)
        : true;
};
</script>

<style></style>
