<template>
    <span
        v-if="totalCount"
        class="text-center text-medium-emphasis text-subtitle-2"
    >
        Showing
        <v-chip color="success" label>
            {{ currentCount }} / {{ totalCount }}
        </v-chip>

        results.
    </span>
</template>

<script setup>
const props = defineProps({
    currentCount: {
        type: Number,
        required: true,
    },
    totalCount: {
        type: Number,
        required: true,
    },
});
</script>
