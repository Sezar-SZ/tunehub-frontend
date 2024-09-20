<template>
    <div
        v-if="data"
        class="w-full h-full overflow-hidden lg:px-16 flex flex-col max-w-screen-2xl mx-auto"
    >
        <div class="w-full flex items-center justify-between">
            <div class="flex gap-4">
                <h1 class="text-white text-5xl">{{ data.name }}</h1>
                <Button
                    icon="pi pi-pen-to-square"
                    class="!text-gray-400 !text-4xl"
                    @click="isCreateModalVisible = true"
                />
            </div>
            <span class="text-xl">{{
                data.published ? "Published" : "Draft"
            }}</span>
        </div>
        <div class="flex flex-col mt-6 max-h-full overflow-y-auto">
            <PlaylistsSongItem
                v-for="(track, index) in data.playlistTrack"
                :song="track.song"
                :list-position="index + 1"
            />
        </div>
    </div>

    <PlaylistsCreateModal
        v-if="isCreateModalVisible"
        :visible="isCreateModalVisible"
        @hide="isCreateModalVisible = false"
        @submit="playlistSubmitted()"
        :id="data.id"
    />
</template>

<script setup lang="ts">
definePageMeta({
    layout: "app",
});
const route = useRoute();

const isCreateModalVisible = ref(false);

const { data, execute } = await useProtectedFetch<PlaylistsFindOneResponse>(
    `/playlists/${route.params.id}`,
    {
        server: false,
        watch: false,
    }
);

const playlistSubmitted = () => {
    isCreateModalVisible.value = false;
    execute();
};
</script>
