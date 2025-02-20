<template>
    <p
        v-if="totalCount"
        class="text-center text-medium-emphasis text-subtitle-2"
        aria-live="polite"
    >
        Showing
        <strong>
            <v-chip color="success" label>
                {{ currentCount }} / {{ totalCount }}
            </v-chip>
        </strong>

        results.
    </p>
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
