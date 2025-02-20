<template>
    <section aria-labelledby="gallery-title">
        <v-row justify="center" align="end">
            <!-- Section Title -->
            <v-col cols="12" class="text-center">
                <h1 id="gallery-title" class="text-h4 font-weight-bold">
                    {{ title }}
                </h1>
            </v-col>

            <!-- Movie Cards -->
            <v-col cols="12" lg="8">
                <v-row justify="center" align="end">
                    <v-col
                        cols="12"
                        xs="6"
                        sm="3"
                        tag="article"
                        v-for="movie in movieList"
                        :key="movie.imdbID"
                    >
                        <poster-card :movie="movie" margins />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </section>
</template>

<script setup>
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
</script>
