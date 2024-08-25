<template>
    <div class="flex flex-col mt-6 h-full overflow-auto">
        <div
            v-for="playlist in playlists"
            class="w-full px-2 py-4 flex justify-between items-center"
        >
            <span class="text-white">{{ playlist.name }}</span>
            <span class="text-gray-300 text-sm pr-2">{{
                playlist.published ? "Published" : "Draft"
            }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Playlist } from "~/types/playlists/FindMany";

interface Props {
    playlists: Playlist[];
}

const props = defineProps<Props>();
</script>
