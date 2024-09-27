<template>
    <div class="w-screen h-screen bg-dark flex">
        <PlaylistsSidebarComponent v-if="isLoggedIn" />
        <div class="w-full h-full flex flex-col">
            <PlaylistsSearchComponent v-if="isLoggedIn" />
            <!-- using an element instead of conditional class because of hydration mismatch -->
            <div v-if="!isLoggedIn" class="h-32"></div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const isLoggedIn = useAccessToken();
</script>
