<script setup lang="ts">
definePageMeta({
    layout: "navbar",
});
</script>

<template>
    <div class="w-full h-full relative">
        <img class="w-full h-full object-cover" src="~/assets/img/hero.jfif" />
        <div
            class="absolute inset-0 backdrop-blur-sm w-full h-full flex flex-col justify-center items-center text pb-[15vh]"
        >
            <p>Discover and create</p>
            <p>New playlists</p>
            <div class="flex gap-2 lg:gap-7">
                <span>With</span>
                <h1 class="!text-[#24CB08]">Tunehub</h1>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.text {
    font-weight: bold;
    color: white;
    font-size: calc(1rem + 7vmin);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow: 1px 1px 2px black;
    white-space: nowrap;
}
</style>
