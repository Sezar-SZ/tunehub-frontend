<template>
    <button @click="execute()">
        <span class="pi pi-trash text-4xl"></span>
    </button>
</template>

<script setup lang="ts">
interface Props {
    trackId: number;
}

const { $toast } = useNuxtApp();

const emit = defineEmits(["delete"]);
const props = defineProps<Props>();

const route = useRoute();

const { execute } = await useProtectedFetch(
    `/playlists/${route.params.id}/track/${props.trackId}`,
    {
        server: false,
        immediate: false,
        lazy: true,
        method: "DELETE",
        watch: false,

        onResponse: (e) => {
            if (e.response.status === 200) {
                emit("delete");
            } else {
                $toast.error("something went wrong");
            }
        },
    }
);
</script>
