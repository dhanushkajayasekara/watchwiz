<template>
    <v-row justify="center">
        <v-col cols="12" class="text-center">
            <h1>{{ title }}</h1>
        </v-col>
        <v-col v-for="n in 4" :key="n" xs="6" sm="3" md="2">
            <v-card
                class="mx-auto my-12"
                rounded="lg"
                hover
                @click="showItemDetails()"
            >
                <v-img
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    :src="`https://picsum.photos/200/300?image=${n * 5 + 10}`"
                    cover
                ></v-img>

                <v-card-item>
                    <v-card-title>Spider Man</v-card-title>

                    <v-card-subtitle>
                        <span class="me-1">2024</span>
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

const { title, gallery } = defineProps(["title", "gallery"]);
let showItemDetailsDialog = ref(false);

const showItemDetails = () => {
    showItemDetailsDialog.value = true;
    console.log("showItemDetails", showItemDetailsDialog);
};

const hideItemDetails = () => {
    showItemDetailsDialog.value = false;
};
</script>
