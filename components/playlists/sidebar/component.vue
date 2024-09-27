<template>
    <PlaylistsSidebarDesktop />
    <PlaylistsSidebarMobile
        :visible="drawerVisible"
        @hide="drawerVisible = false"
    />

    <Button
        icon="pi pi-bars"
        class="!text-gray-400 !text-3xl !fixed top-2 left-2 xl:!hidden"
        @click="drawerVisible = true"
    />
</template>

<script setup lang="ts">
const drawerVisible = ref(false);

</script>
