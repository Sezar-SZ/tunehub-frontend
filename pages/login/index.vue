<script setup lang="ts">
import type { InputType } from "~/components/eyeIcon.vue";
import type RefreshResponse from "~/types/auth/refreshResponse";

definePageMeta({
    layout: "auth",
});

const accessToken = useAccessToken();

const route = useRouter();

const email = ref("");
const password = ref("");

const passwordType = ref<InputType>("password");

const { execute } = usePublicFetch<RefreshResponse>("/auth/login", {
    method: "post",
    body: {
        email,
        password,
    },
    immediate: false,
    credentials: "include",
    watch: false,
    onResponse: (e) => {
        if (e.response._data) {
            if (e.response._data && e.response._data.accessToken) {
                accessToken.value = e.response._data.accessToken;
            }
            console.log("here");

            route.push({ path: "/" });
        }
    },
});

function onLogin() {
    execute();
}
</script>

<template>
    <div
        class="w-full h-full flex flex-col text-grayText items-center justify-center p-8 gap-8"
    >
        <h1 class="text-4xl">Login</h1>
        <form
            class="flex flex-col w-full gap-6 items-center"
            @submit.prevent="onLogin()"
        >
            <input type="text" placeholder="email" v-model="email" />
            <div class="relative w-full">
                <input
                    :type="passwordType"
                    placeholder="password"
                    v-model="password"
                />
                <EyeIcon
                    @text="passwordType = 'text'"
                    @password="passwordType = 'password'"
                    :password-type="passwordType"
                    class="absolute right-4 top-1/2 -translate-y-1/2"
                />
            </div>

            <button
                class="py-3 px-8 mt-4 rounded border border-light bg-transparent"
                type="submit"
            >
                Login
            </button>
        </form>
        <div class="flex gap-2">
            <span class="font-light">Don't have an account?</span>
            <NuxtLink class="font-semibold" to="/register">Register</NuxtLink>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
input {
    @apply w-full p-4 rounded border border-light bg-transparent;
}
</style>
