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
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
