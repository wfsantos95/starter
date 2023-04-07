<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-danger-600 dark:text-danger-400">
            {{ message }}
        </p>
    </div>
</template>
