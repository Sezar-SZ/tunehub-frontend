<script setup lang="ts">
import type RefreshResponse from "./types/auth/refreshResponse";

const { data, status } = await useProtectedFetch<RefreshResponse>(
    "/auth/refresh",
    {
        server: false,
        watch: false,
        retry: false,
    }
);
const accessToken = useAccessToken();
const authIsChecked = useAuthIsChecked();

watch(status, () => {
    if (status.value === "success" || status.value === "error") {
        authIsChecked.value = true;

        if (data.value && data.value.accessToken) {
            accessToken.value = data.value.accessToken;
        }
    }
});

// TODO: refactor this...

const audioSrc = usePlayingSong();
const audio = ref<HTMLAudioElement | null>(null);

function pauseAudio() {
    if (audio.value) {
        audio.value.pause();

        audio.value.currentTime = 0;
    }
}

function playAudio(src: string) {
    pauseAudio();

    if (src) {
        audio.value = new Audio();
        audio.value.src = src;
        audio.value.play();
    }
}

watch(audioSrc, (newAudio) => {
    playAudio(newAudio);
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
