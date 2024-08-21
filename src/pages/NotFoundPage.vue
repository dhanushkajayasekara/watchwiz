<template>
    <v-container
        class="fill-height d-flex align-center justify-center text-center"
    >
        <v-row>
            <v-col>
                <v-icon
                    class="text-h2"
                    color="warning"
                    icon="mdi-alert-circle"
                    size="x-large"
                ></v-icon>

                <h1 class="display-2 font-weight-bold">404 - Page Not Found</h1>
                <p class="text-h6 mb-6">
                    Oops! The page you are looking for does not exist or has
                    been moved.
                </p>

                <v-btn color="primary" dark @click="() => router.push('/')">
                    Back to Home
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style lang="scss" scoped></style>
