<template>
    <div class="w-full px-2 py-5 flex justify-between items-center">
        <div class="flex gap-4 items-center">
            <span>{{ listPosition }}</span>
            <div class="w-16 h-16 relative flex justify-center group">
                <img
                    :src="track.song.cover"
                    :alt="track.song.title"
                    class="object-cover aspect-square w-full rounded-md"
                />
                <PlaylistsSearchSongPlayBtn
                    class="group-hover:opacity-100"
                    :src="track.song.preview"
                    @play="(src) => setCurrentSongSrc(src)"
                />
            </div>
            <div class="flex flex-col justify-center">
                <span class="text-white line-clamp-1">{{
                    track.song.title
                }}</span>
                <span class="text-gray-400 line-clamp-1">{{
                    track.song.artist
                }}</span>
            </div>
        </div>
        <PlaylistsSongDeleteBtn
            v-if="ownedByUser"
            :track-id="track.id"
            @delete="$emit('delete')"
        />
    </div>
</template>

<script setup lang="ts">
import type { Track } from "~/types/songs";

interface Props {
    listPosition: number;
    track: Track;
    ownedByUser: boolean;
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
