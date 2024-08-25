<template>
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
    <PlaylistsCreateModal
        v-if="isCreateModalVisible"
        :visible="isCreateModalVisible"
        @hide="isCreateModalVisible = false"
    />
</template>

<script setup lang="ts">
const isCreateModalVisible = ref(false);
</script>
