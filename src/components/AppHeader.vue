<template>
    <v-app-bar color="surface" dark height="auto">
        <v-container>
            <v-row justify="space-between" align="center">
                <v-col cols="12" xs="12" sm="4" md="2">
                    <div class="d-flex justify-center justify-sm-start">
                        <v-img
                            src="@/assets/logo.png"
                            alt="Logo"
                            height="40"
                            @click="() => router.push('/')"
                            class="cursor-pointer"
                        />
                    </div>
                </v-col>

                <v-spacer></v-spacer>
                <v-col
                    cols="12"
                    xs="12"
                    sm="8"
                    md="4"
                    v-if="route.name !== 'search'"
                >
                    <v-row align="center" justify="end">
                        <v-col cols="12" xs="12" sm="8">
                            <v-text-field
                                prepend-inner-icon="mdi-magnify"
                                placeholder="Search movies / tv series"
                                variant="outlined"
                                hide-details
                                single-line
                                dense
                                bg-color="surface"
                                rounded="pill"
                            />
                        </v-col>

                        <v-col cols="12" xs="12" sm="4">
                            <v-btn
                                class="text-none"
                                variant="outlined"
                                prepend-icon="mdi-magnify"
                                color="info"
                                @click="() => router.push('/search')"
                            >
                                Browse
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
</script>

<style lang="scss" scoped>
.v-toolbar {
    position: relative !important;
}
</style>
