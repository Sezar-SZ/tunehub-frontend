<template>
    <div class="fixed inset-0 bg-black bg-opacity-70">
        <Dialog
            :visible="visible"
            modal
            class="!bg-lightShade w-80 lg:w-96 h-52 p-4 !rounded-xl"
            close-icon="none"
        >
            <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
                <input
                    type="text"
                    placeholder="Playlist Name"
                    v-model="playlistName"
                    class="border py-2 px-3 rounded bg-light focus:outline-none focus:border-gray-400 text-gray-300"
                    :class="error ? 'border-red-500' : 'border-light'"
                />
                <div class="w-full flex gap-4">
                    <label class="text-gray-400">draft</label>
                    <Checkbox
                        class="!bg-gray-300 !text-black !w-5 !h-5 !rounded !flex !justify-center"
                        v-model="isDraft"
                        :binary="true"
                    />
                </div>
                <div class="flex justify-end gap-2">
                    <Button
                        type="button"
                        class="btn"
                        label="Cancel"
                        severity="secondary"
                        @click="$emit('hide')"
                    />
                    <Button type="submit" label="Save" class="btn" />
                </div>
            </form>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
interface Props {
    visible: boolean;
    update?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(["hide"]);

const playlistName = ref("");
const isDraft = ref(false);
const error = ref(false);

const { data, execute } = await useProtectedFetch("/playlists", {
    server: false,
    watch: false,
    immediate: false,
    lazy: true,
    body: {
        name: playlistName.value,
        published: !isDraft.value,
    },
    method: props.update ? "PUT" : "POST",
    onResponse: (e) => {
        if (e.response.status === 201 && e.response.status === 201) {
            emit("hide");
        }
    },
});

const onSubmit = () => {
    if (!playlistName.value) {
        error.value = true;
    } else execute();
};
</script>

<style lang="postcss">
.btn {
    @apply !bg-light !text-gray-400 !px-3 !py-2 !rounded-lg;
}
</style>
