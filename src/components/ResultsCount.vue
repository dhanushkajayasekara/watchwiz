<template>
    <span v-if="totalCount" class="text-center text-medium-emphasis">
        Showing
        <v-chip color="success" label>
            {{ currentCount }} / {{ totalCount }}
        </v-chip>
        <!-- /
        <v-chip size="x-small" color="info" class="ma-2" label>
            {{ totalCount }}
        </v-chip> -->
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
