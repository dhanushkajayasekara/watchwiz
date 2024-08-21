<template>
    <v-app>
        <app-header />
        <v-container>
            <v-row justify="center">
                <v-col cols="12" lg="10">
                    <v-alert
                        rounded="lg"
                        class="mt-16 py-6"
                        :text="movieStore.error"
                        title="Oops"
                        type="error"
                        v-if="movieStore.error"
                        variant="tonal"
                        border="start"
                        closable
                    ></v-alert>
                    <v-alert
                        rounded="lg"
                        class="mt-16 py-6"
                        :text="movieStore.errorInfo"
                        title="Oops"
                        type="warning"
                        v-if="movieStore.errorInfo"
                        variant="tonal"
                        border="start"
                        closable
                    ></v-alert>
                </v-col>
            </v-row>
        </v-container>

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
