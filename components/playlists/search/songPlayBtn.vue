<template>
    <div
        class="absolute inset-0 bg-opacity-40 backdrop-blur opacity-0 flex w-full justify-center items-center gap-6 bg-gray-950 transition-opacity duration-200"
    >
        <button @click="$emit('play', props.src)">
            <span v-if="!isCurrentIsPlaying()" class="pi pi-play icon"></span>
            <span v-else class="pi pi-pause icon"></span>
        </button>
    </div>
</template>

<script setup lang="ts">
interface Props {
    src: string;
}

const props = defineProps<Props>();

const currentSongSrc = usePlayingSong();
const isCurrentIsPlaying = () => props.src === currentSongSrc.value;
</script>

<style lang="postcss" scoped>
button {
    @apply flex justify-center items-center;

    .icon {
        @apply text-white text-3xl;
    }
}
</style>
