<template>
    <v-alert
        rounded="lg"
        class="mt-16 py-6"
        :text="errorMessage"
        title="Oops"
        :type="alertType"
        v-if="errorMessage"
        variant="tonal"
        border="start"
        closable
    ></v-alert>
</template>

<script setup>
import { useMovieStore } from "@/stores/movieStore";

const movieStore = useMovieStore();

const props = defineProps({
    alertType: {
        type: String,
        default: "error",
    },
    errorMessage: {
        type: String,
        default: null,
    },
});
</script>
