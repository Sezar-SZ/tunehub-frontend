<script setup lang="ts">
const { data, execute } = useProtectedFetch("/auth", {
    server: false,
    watch: false,
});
</script>
<template>
    <button @click="execute()" class="bg-green-300 text-black text-xl p-8">
        fetch!
    </button>
</template>
