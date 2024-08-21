<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
        <v-overlay
            :model-value="movieStore.loading"
            class="align-center justify-center"
        >
            <v-progress-circular
                color="primary"
                size="64"
                indeterminate
            ></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();
</script>
