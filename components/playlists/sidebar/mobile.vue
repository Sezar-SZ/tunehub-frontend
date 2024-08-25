<template>
    <Drawer
        :visible="props.visible"
        class="!bg-darkShade xl:hidden px-4"
        close-icon="none"
    >
        <div class="w-full flex justify-end mb-5">
            <Button
                icon="pi pi-times"
                class="!text-gray-500 !text-3xl"
                @click="$emit('hide')"
            />
        </div>
        <PlaylistsSidebarData />
    </Drawer>
</template>

<script setup lang="ts">
interface Props {
    visible: boolean;
}

const props = defineProps<Props>();
</script>
