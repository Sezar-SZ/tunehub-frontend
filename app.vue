<script setup lang="ts">
import type RefreshResponse from "./types/auth/refreshResponse";

const { data, status } = await useFetch<RefreshResponse>("/auth/refresh", {
    baseURL: "http://localhost:5000/",
    server: false,
    credentials: "include",
    watch: false,
    retry: false,
});
const accessToken = useAccessToken();
const authIsChecked = useAuthIsChecked();

watch(status, () => {
    console.log(status.value);

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
