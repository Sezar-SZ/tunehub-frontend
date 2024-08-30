<template>
    <div class="w-11/12 h-full relative max-w-lg">
        <input
            v-model="val"
            type="text"
            class="w-full bg-darkShade py-3 px-10 rounded-lg text-gray-300"
            placeholder="Enter Song Name"
        />
        <div class="!absolute left-0 top-0 h-full flex items-center pl-2">
            <span class="pi pi-search text-2xl text-gray-300"></span>
        </div>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const val = ref("");

const onDebouncedValue = (value: string) => {
    if (value.trim()) router.push(`/app/search?q=${val.value}`);
};

const registerDebounce = useDebounce(onDebouncedValue, 600);

watch(val, (newValue) => {
    registerDebounce(newValue);
});
</script>
