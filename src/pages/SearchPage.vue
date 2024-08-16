<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="12">
                <v-card
                    variant="outlined"
                    class="pa-6 rounded-lg"
                    color="surface-variant"
                >
                    <v-row align="center" justify="center">
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <v-text-field
                                prepend-inner-icon="mdi-magnify"
                                placeholder="Search term"
                                variant="outlined"
                                hide-details
                                single-line
                                dense
                                rounded="pill"
                                clearable
                            />
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <v-range-slider
                                v-model="range"
                                :max="2030"
                                :min="1950"
                                :step="10"
                                class="mx-4"
                                hide-details
                            >
                                <template v-slot:prepend>
                                    <v-label>{{ range[0] }}</v-label>
                                </template>
                                <template v-slot:append>
                                    <v-label>{{ range[1] }}</v-label>
                                </template>
                            </v-range-slider>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="12"
                            md="6"
                            lg="4"
                            class="d-block d-sm-flex"
                        >
                            <v-radio-group
                                v-model="searchType"
                                inline
                                hide-details
                            >
                                <v-radio label="Any" value="any" />
                                <v-radio label="Movies" value="movies" />
                                <v-radio label="TV Series" value="series" />
                            </v-radio-group>
                            <v-btn
                                class="text-none"
                                variant="outlined"
                                color="info"
                                prepend-icon="mdi-magnify"
                            >
                                Search
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12"> 4 results found. </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="3"
                sm="3"
                md="4"
                lg="5"
                class="col-content border-e-lg pr-6"
            >
                <searched-items />
            </v-col>
            <v-col cols="8" sm="9" md="8" lg="7" class="col-content pl-6">
                <searched-item-details />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";

const searchType = ref("any");
const range = ref([2000, 2024]);
</script>

<style lang="scss" scoped></style>
