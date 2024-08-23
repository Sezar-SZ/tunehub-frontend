<template>
    <PlaylistsDesktopSidebar />
    <PlaylistsMobileSidebar
        :visible="isMobileSidebarVisible"
        @hide="isMobileSidebarVisible = false"
    />
    <div class="w-full flex p-4">
        <Button
            icon="pi pi-bars"
            class="!text-gray-400 !text-3xl"
            @click="toggleMobileDrawer()"
        />
        >
    </div>
</template>

<script setup lang="ts">
const isMobileSidebarVisible = ref(false);

const toggleMobileDrawer = () => {
    isMobileSidebarVisible.value = !isMobileSidebarVisible.value;
};
</script>
