<template>
    <div class="w-full px-2 py-5 flex justify-between items-center">
        <div class="flex gap-4 items-center">
            <span>{{ listPosition }}</span>
            <img
                :src="song.cover"
                :alt="song.title"
                class="w-16 h-16 object-cover rounded-md"
            />
            <div class="flex flex-col justify-center">
                <span class="text-white line-clamp-1">{{ song.title }}</span>
                <span class="text-gray-400 line-clamp-1">{{
                    song.artist
                }}</span>
            </div>
        </div>
        <PlaylistsSongDeleteBtn />
    </div>
</template>

<script setup lang="ts">
// import Song from "~/types/songs";
interface Props {
    listPosition: number;
    song: Song;
}

defineProps<Props>();
</script>
