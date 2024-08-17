<script setup lang="ts">
const accessToken = useAccessToken();
const { execute } = useProtectedFetch("/auth/logout", {
    lazy: true,
    server: false,
    immediate: false,
    method: "POST",
    onResponse: () => {
        accessToken.value = "";
    },
});
</script>

<template>
    <button @click="execute()" class="link">Logout</button>
</template>
