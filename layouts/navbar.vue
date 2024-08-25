<script setup lang="ts">
const accessToken = useAccessToken();
</script>

<template>
    <div class="w-screen h-screen flex flex-col overflow-hidden">
        <nav class="flex justify-center gap-16 bg-darkShade py-6">
            <NuxtLink to="/playlists" class="link">Playlists</NuxtLink>
            <NuxtLink to="/" class="link">Search</NuxtLink>
            <NuxtLink v-if="!accessToken" to="/login" class="link"
                >Login</NuxtLink
            >
            <NavbarLogout v-else />
        </nav>

        <slot />
    </div>
</template>

<style lang="postcss" scoped>
.link {
    @apply text-grayText text-xl hover:underline;
}
</style>
