<template>
    <v-app-bar color="surface" dark height="80" class="pe-3">
        <v-toolbar color="surface">
            <v-toolbar-title>
                <v-img
                    src="@/assets/logo.png"
                    alt="Logo"
                    contain
                    height="50"
                    width="auto"
                    @click="() => router.push('/')"
                    class="cursor-pointer"
                />
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="() => router.push('/search')">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon @click="() => router.push('/watchlist')">
                <v-icon>mdi-eye-outline</v-icon>
            </v-btn>
        </v-toolbar>
    </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
.v-toolbar {
    position: relative !important;
}
</style>
