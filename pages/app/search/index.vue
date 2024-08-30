<template>
    <div
        class="w-full p-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-full overflow-scroll gap-6"
    >
        <PlaylistsSearchResult v-for="song in data" :song="song" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: "app",
});

import type { Song } from "~/types/songs";

const route = useRoute();

const { $toast } = useNuxtApp();

const queryParam = computed(() => route.query.q);

const { data } = usePublicFetch<Song[]>("/songs", {
    method: "get",
    server: false,

    query: {
        q: queryParam,
    },

    onResponse: (e) => {
        if (e.response.status !== 200) {
            $toast.error("Please Try again later");
        }
    },
});
</script>
