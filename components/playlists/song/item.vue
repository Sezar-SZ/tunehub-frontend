<template>
    <div class="w-full px-2 py-5 flex justify-between items-center">
        <div class="flex gap-4 items-center">
            <span>{{ listPosition }}</span>
            <div class="w-16 h-16 relative flex justify-center group">
                <img
                    :src="song.cover"
                    :alt="song.title"
                    class="object-cover aspect-square w-full rounded-md"
                />
                <PlaylistsSearchSongPlayBtn
                    class="group-hover:opacity-100"
                    :src="song.preview"
                    @play="(src) => setCurrentSongSrc(src)"
                />
            </div>
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

const currentSongSrc = usePlayingSong();

const setCurrentSongSrc = (src: string) => {
    if (!isCurrentIsPlaying(src)) {
        currentSongSrc.value = src;
    } else {
        currentSongSrc.value = "";
    }
};

const isCurrentIsPlaying = (src: string) => src === currentSongSrc.value;
</script>
