<template>
    <Drawer
        :visible="props.visible"
        class="!bg-darkShade xl:hidden"
        close-icon="none"
    >
        <div class="w-full px-4 flex justify-end">
            <Button
                icon="pi pi-times"
                class="!text-gray-500 !text-3xl"
                @click="$emit('hide')"
            />
        </div>
    </Drawer>
</template>

<script setup lang="ts">
interface Props {
    visible: boolean;
}

const props = defineProps<Props>();
</script>
