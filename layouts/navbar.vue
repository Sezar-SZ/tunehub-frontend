<script setup lang="ts">
const authIsChecked = useAuthIsChecked();
const accessToken = useAccessToken();
</script>

<template>
    <div class="w-screen h-screen flex flex-col overflow-hidden">
        <nav class="flex justify-center gap-16 bg-darkShade py-6">
            <NuxtLink to="/" class="link">Playlists</NuxtLink>
            <NuxtLink to="/" class="link">Search</NuxtLink>
            <NuxtLink to="/login" class="link">Login</NuxtLink>
            <span>{{ JSON.stringify(authIsChecked) }}</span>
            <span>{{ JSON.stringify(accessToken) }}</span>
        </nav>

        <slot />
    </div>
</template>

<style lang="postcss" scoped>
.link {
    @apply text-grayText text-xl hover:underline;
}
</style>
