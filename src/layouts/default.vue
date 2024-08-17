<template>
    <v-app>
        <app-header />
        <v-alert
            rounded="lg"
            class="ma-16 pa-6"
            :text="movieStore.error"
            title="Oops"
            type="error"
            v-if="movieStore.error"
            variant="tonal"
            border="start"
            closable
        ></v-alert>
        <v-main>
            <router-view />
        </v-main>
        <app-footer />
    </v-app>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();
</script>
