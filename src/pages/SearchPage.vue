<template>
    <v-container>
        <!-- Page Title -->
        <!-- <header class="mb-10"> -->
        <h1 class="text-h4 font-weight-bold text-center mb-16">
            Search Movies / TV Series
        </h1>
        <!-- </header> -->

        <!-- Search Section -->
        <section>
            <v-row justify="center" align="end">
                <v-col cols="12" lg="10">
                    <v-card
                        variant="outlined"
                        class="pa-6 rounded-lg"
                        color="surface-variant"
                    >
                        <form @submit.prevent="searchMovies">
                            <v-row align="center" justify="center">
                                <v-col cols="12" sm="12" md="6" lg="4">
                                    <label id="search-label" class="d-sr-only">
                                        Enter a movie or series name
                                    </label>
                                    <v-text-field
                                        prepend-inner-icon="mdi-magnify"
                                        placeholder="Search term"
                                        variant="outlined"
                                        hide-details
                                        single-line
                                        dense
                                        rounded="pill"
                                        clearable
                                        autofocus
                                        label="Search for a movie"
                                        aria-describedby="search-label"
                                        v-model="inputTitle"
                                        @click:clear="() => (inputTitle = null)"
                                        @keydown.enter.prevent="searchMovies"
                                    />
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="6"
                                    lg="3"
                                    class="justify-center"
                                >
                                    <label
                                        id="search-type-group"
                                        class="d-sr-only"
                                    >
                                        Select search type among Any, Movies and
                                        TV Series
                                    </label>
                                    <v-radio-group
                                        inline
                                        hide-details
                                        aria-describedby="search-type-group"
                                        v-model="inputSearchType"
                                    >
                                        <v-radio label="Any" value="" />
                                        <v-radio label="Movies" value="movie" />
                                        <v-radio
                                            label="TV Series"
                                            value="series"
                                        />
                                    </v-radio-group>
                                </v-col>

                                <v-col cols="12" sm="12" md="6" lg="5">
                                    <div
                                        class="d-block d-sm-flex justify-space-between align-center"
                                    >
                                        <div
                                            class="d-block d-sm-flex flex-grow-1 align-center"
                                        >
                                            <label
                                                id="search-year"
                                                class="d-sr-only"
                                            >
                                                Mark as checked, if you want to
                                                filter by year range
                                            </label>
                                            <v-checkbox
                                                aria-describedby="search-year"
                                                color="info"
                                                :label="
                                                    isYear ? 'Year : ' : 'Year'
                                                "
                                                hide-details
                                                v-model="isYear"
                                            ></v-checkbox>

                                            <label
                                                id="year-range"
                                                class="d-sr-only"
                                            >
                                                Change the year range
                                            </label>
                                            <v-range-slider
                                                aria-describedby="year-range"
                                                v-if="isYear"
                                                v-model="inputYearRange"
                                                :min="1950"
                                                :max="endYear"
                                                :step="10"
                                                hide-details
                                            >
                                                <template v-slot:prepend>
                                                    <v-label>
                                                        {{ inputYearRange[0] }}
                                                    </v-label>
                                                </template>
                                                <template v-slot:append>
                                                    <v-label>
                                                        {{ inputYearRange[1] }}
                                                    </v-label>
                                                </template>
                                            </v-range-slider>
                                        </div>

                                        <v-btn
                                            class="text-none mt-5 mt-sm-0 ml-sm-4 ml-0"
                                            variant="outlined"
                                            color="info"
                                            prepend-icon="mdi-magnify"
                                            :disabled="
                                                !(
                                                    inputTitle &&
                                                    inputTitle.length >= 3
                                                )
                                            "
                                            type="submit"
                                            @click="searchMovies()"
                                        >
                                            Search
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </form>
                    </v-card>

                    <v-divider
                        color="info"
                        class="my-10 border-opacity-75"
                        v-if="movieStore.searchedMovies.length"
                    />
                </v-col>
            </v-row>
        </section>

        <!-- Results count -->
        <section>
            <v-row class="mb-10">
                <v-col cols="12">
                    <results-count
                        :currentCount="movieStore.searchedMovies.length"
                        :totalCount="movieStore.searchedMoviesCount"
                    />
                </v-col>
            </v-row>
        </section>

        <!-- Search results and details -->
        <section v-if="movieStore.searchedMovies.length">
            <v-row>
                <v-col cols="12" sm="3" md="4" lg="5" class="border-e-lg pr-6">
                    <!-- Search results -->
                    <v-row>
                        <v-col
                            cols="12"
                            style="max-height: 500px; overflow-y: auto"
                        >
                            <v-row align="end">
                                <v-col
                                    cols="12"
                                    sm="12"
                                    md="6"
                                    lg="4"
                                    v-for="movie in movieStore.searchedMovies"
                                    :key="movie.imdbID"
                                >
                                    <poster-card :movie="movie" />
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col
                            cols="12"
                            class="d-flex flex-column"
                            v-if="movieStore.searchedMoviesCount"
                        >
                            <v-btn
                                v-if="
                                    movieStore.searchedMoviesCount !=
                                    movieStore.searchedMovies.length
                                "
                                variant="tonal"
                                @click="() => loadMoreMovies()"
                                class="mt-4"
                            >
                                More
                            </v-btn>

                            <results-count
                                class="d-none d-sm-block mt-4"
                                :currentCount="movieStore.searchedMovies.length"
                                :totalCount="movieStore.searchedMoviesCount"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="9"
                    sm="9"
                    md="8"
                    lg="7"
                    class="pl-6 d-none d-sm-block"
                >
                    <!-- Details -->
                    <movie-details />
                </v-col>
            </v-row>
        </section>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useMovieStore } from "@/stores/movieStore";

const inputTitle = ref("");
const inputSearchType = ref("");
const currentYear = new Date().getFullYear();
const endYear = ref(Math.ceil(currentYear / 10) * 10);
const inputYearRange = ref([2020, endYear.value]);
const isYear = ref(false);
const movieStore = useMovieStore();

let currentPage = ref(1);

const searchMovies = (loadMore = false) => {
    if (!loadMore) {
        currentPage.value = 1;
        movieStore.movieDetails = {};
    }

    if (isYear.value) {
        movieStore.searchMoviesByYear(
            currentPage.value,
            inputTitle.value,
            inputSearchType.value,
            inputYearRange.value[0],
            inputYearRange.value[1]
        );
    } else {
        movieStore.searchMovies(
            currentPage.value,
            inputTitle.value,
            inputSearchType.value
        );
    }
};

const loadMoreMovies = () => {
    currentPage.value++;

    if (isYear.value) {
        movieStore.updateMoviesForPage(currentPage.value);
    } else {
        searchMovies(true);
    }
};

onMounted(() => {
    movieStore.movieDetails = {};
    movieStore.searchedMoviesCount = 0;
    movieStore.searchedMovies = [];
});
</script>

<style lang="scss" scoped></style>
