<template>
    <v-dialog
        :model-value="showMovieDetailsDialog"
        width="auto"
        persistent
        role="dialog"
        aria-labelledby="dialog-title"
        aria-modal="true"
        @keydown.esc="closeDialog()"
    >
        <v-card class="pa-10" max-width="800" rounded="lg">
            <!-- Movie Details -->
            <movie-details />

            <!-- Dialog Actions -->
            <template v-slot:actions>
                <v-btn
                    class="ms-auto text-none mt-3"
                    prepend-icon="mdi-close"
                    variant="outlined"
                    text="Close"
                    @click="closeDialog()"
                    aria-label="Close movie details"
                ></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps({
    showMovieDetailsDialog: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const emit = defineEmits(["closeDialog"]);

const closeDialog = () => {
    emit("closeDialog");
};
</script>

<style lang="scss" scoped></style>
