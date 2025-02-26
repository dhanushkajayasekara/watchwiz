<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>

        <v-overlay
            :model-value="movieStore.loading"
            class="align-center justify-center"
        >
            <div role="status" aria-live="polite">
                <v-progress-circular color="primary" size="64" indeterminate />
            </div>
        </v-overlay>
    </v-app>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();
</script>
