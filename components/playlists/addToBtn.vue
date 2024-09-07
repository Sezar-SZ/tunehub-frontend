<template>
    <div class="dropdown dropdown-left">
        <button tabindex="0" role="button" @click="executeFetch">
            <span class="pi pi-ellipsis-v"></span>
        </button>
        <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow flex flex-col"
        >
            <button
                v-for="playlist in playlistData?.Playlist"
                :key="playlist.id"
                class="hover:bg-lightShade w-full py-2"
                @click="playlistId = playlist.id"
            >
                <span class="text-white">{{ playlist.name }}</span>
            </button>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { PlaylistsFindManyResponse } from "~/types/playlists/FindMany";

interface Props {
    songId: number;
}

const { $toast } = useNuxtApp();

const props = defineProps<Props>();

const playlistId = ref<string>();

const { data: playlistData, execute: executeFetch } =
    await useProtectedFetch<PlaylistsFindManyResponse>("/playlists", {
        server: false,
        watch: false,
        immediate: false,
        lazy: true,
    });

const addSongUrl = computed(
    () => `/playlists/${playlistId.value}/track/${props.songId}`
);

watch(addSongUrl, async () => {
    // TODO: figure the issue with computed url... (this is a workaround)
    const { execute: executeAddToPlaylist } =
        await useProtectedFetch<PlaylistsFindManyResponse>(addSongUrl.value, {
            server: false,
            immediate: false,
            lazy: true,
            method: "POST",
            watch: false,

            onResponse: (e) => {
                if (e.response.status === 200) {
                    $toast.success("Added To Playlist");
                } else {
                    $toast.error("something went wrong");
                }
            },
        });

    executeAddToPlaylist();
});
</script>
