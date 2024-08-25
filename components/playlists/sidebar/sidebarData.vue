<template>
    <div class="h-full flex flex-col">
        <div class="w-full flex items-center justify-between gap-8">
            <div class="flex gap-3 items-center">
                <i class="pi pi-list !text-3xl !text-gray-400" />
                <span class="text-gray-300 text-2xl">Your Playlists</span>
            </div>

            <Button
                icon="pi pi-plus"
                class="!text-gray-400 !text-2xl"
                @click="isCreateModalVisible = true"
            />
        </div>
        <PlaylistsSidebarList v-if="data" :playlists="data.Playlist" />

        <PlaylistsCreateModal
            v-if="isCreateModalVisible"
            :visible="isCreateModalVisible"
            @hide="isCreateModalVisible = false"
            @submit="playlistSubmitted()"
        />
    </div>
</template>

<script setup lang="ts">
import type { PlaylistsFindManyResponse } from "~/types/playlists/FindMany";

const { data, execute } = await useProtectedFetch<PlaylistsFindManyResponse>(
    "/playlists",
    {
        server: false,
        watch: false,
    }
);

const isCreateModalVisible = ref(false);

const playlistSubmitted = () => {
    isCreateModalVisible.value = false;
    execute();
};
</script>
