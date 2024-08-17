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
                @click="showItemDetails()"
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
</template>

<script setup>
import { ref } from "vue";

import { defineProps } from "vue";

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

const showItemDetails = () => {
    showItemDetailsDialog.value = true;
};

const hideItemDetails = () => {
    showItemDetailsDialog.value = false;
};
</script>
