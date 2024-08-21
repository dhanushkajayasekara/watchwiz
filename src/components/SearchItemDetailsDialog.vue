<template>
    <v-dialog :model-value="showItemDetailsDialog" width="auto" persistent>
        <v-card class="pa-10" max-width="800" rounded="lg">
            <searched-item-details />
            <template v-slot:actions>
                <v-btn
                    class="ms-auto text-none mt-3"
                    prepend-icon="mdi-close"
                    variant="outlined"
                    text="Close"
                    @click="closeDialog()"
                ></v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>

<script setup>
const props = defineProps({
    showItemDetailsDialog: {
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
