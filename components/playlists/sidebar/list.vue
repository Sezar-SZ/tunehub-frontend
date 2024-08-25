<template>
    <div class="flex flex-col gap-4"></div>
</template>

<script setup lang="ts">
const { data } = await useProtectedFetch("/playlists", {
    server: false,
    watch: false,
    retry: false,
});
</script>
