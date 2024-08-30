<template>
    <span class="text-white">here {{ route.query.q }} </span>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "app",
});

const route = useRoute();
</script>
