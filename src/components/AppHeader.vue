<template>
    <v-app-bar color="surface" dark height="80" class="pe-3" tag="header">
        <v-toolbar color="surface" tag="nav">
            <v-toolbar-title>
                <v-btn
                    size="x-large"
                    variant="plain"
                    aria-label="Go to Home"
                    :ripple="false"
                    @click="() => router.push('/')"
                >
                    <v-img
                        src="@/assets/logo.png"
                        alt="WatchWiz Logo"
                        contain
                        :height="xs ? 30 : 50"
                        width="auto"
                    />
                </v-btn>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                icon
                @click="() => router.push('/search')"
                aria-label="Search"
            >
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn
                icon
                @click="() => router.push('/watchlist')"
                aria-label="Watchlist"
            >
                <v-icon>mdi-eye-outline</v-icon>
            </v-btn>
        </v-toolbar>
    </v-app-bar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const router = useRouter();
const { xs } = useDisplay();
</script>

<style lang="scss" scoped>
.v-toolbar {
    position: relative !important;
}
</style>
