<template>
    <v-container>
        <v-row justify="center" align="end">
            <v-col cols="12" class="text-center">
                <h1>Interested List</h1>
            </v-col>
            <v-col
                v-for="movie in movieStore.interestedMovies"
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

        <v-btn
            icon
            class="v-btn--bottom-right"
            @click="movieStore.fetchInterestedMovies()"
        >
            <v-icon color="success">mdi-refresh</v-icon>
        </v-btn>

        <!-- Item Details Dialog -->
        <v-dialog v-model="showItemDetailsDialog" width="auto" persistent>
            <v-card class="pa-10" max-width="800" rounded="lg">
                <searched-item-details />
                <template v-slot:actions>
                    <v-btn
                        class="ms-auto text-none mt-3"
                        prepend-icon="mdi-close"
                        variant="outlined"
                        text="Close"
                        @click="hideItemDetails()"
                    ></v-btn>
                </template>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();

onMounted(() => {
    movieStore.fetchInterestedMovies();
});

let showItemDetailsDialog = ref(false);

const fetchDetails = (imdb) => {
    movieStore.fetchMovieDetails(imdb);
    showItemDetailsDialog.value = true;
};

const hideItemDetails = () => {
    showItemDetailsDialog.value = false;
};
</script>

<style lang="scss" scoped>
.v-btn--bottom-right {
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 1000; /* Ensure it's on top of other elements */
}
</style>
