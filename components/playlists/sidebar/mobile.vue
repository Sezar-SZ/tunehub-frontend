<template>
    <Drawer
        v-model:visible="isVisible"
        class="!bg-darkShade xl:hidden px-4"
        close-icon="none"
        @hide="$emit('hide')"
    >
        <div class="w-full h-full flex flex-col">
            <PlaylistsSidebarData />
        </div>
    </Drawer>
</template>

<script setup lang="ts">
const props = defineProps<{ visible: boolean }>();

const emit = defineEmits(["hide"]);

const isVisible = ref(props.visible);

watch(
    () => props.visible,
    () => {
        isVisible.value = props.visible;
    }
);

watch(isVisible, () => {
    if (!isVisible) {
        emit("hide");
    }
});
</script>
