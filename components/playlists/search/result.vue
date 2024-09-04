<template>
    <div class="w-full flex justify-center items-center relative group">
        <div class="flex flex-col items-center gap-4 w-full xl:w-72">
            <div class="w-full relative flex justify-center">
                <img
                    :src="song.album.cover_medium"
                    :alt="song.title_short"
                    class="object-cover aspect-square w-full rounded-md"
                />
                <PlaylistsSearchSongPlayBtn
                    class="group-hover:opacity-100"
                    :src="song.preview"
                    @play="(src) => setCurrentSongSrc(src)"
                />
            </div>
            <div class="w-full">
                <span class="text-white text-sm xl:text-base line-clamp-2">{{
                    song.title
                }}</span>
                <span class="text-gray-400">{{ song.artist.name }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Song } from "~/types/songs";

interface Props {
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
