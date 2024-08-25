<!-- TODO: make this and the search bar a layout... -->

<template>
    <PlaylistsSidebarDesktop />
    <PlaylistsSidebarMobile
        :visible="drawerVisible"
        @hide="drawerVisible = false"
    />
    <div class="w-full flex xl:hidden p-4">
        <Button
            icon="pi pi-bars"
            class="!text-gray-400 !text-3xl"
            @click="drawerVisible = true"
        />
        >
    </div>
</template>

<script setup lang="ts">
const drawerVisible = ref(false);
</script>
