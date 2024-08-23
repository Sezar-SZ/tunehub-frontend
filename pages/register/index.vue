<script setup lang="ts">
import type { InputType } from "~/components/eyeIcon.vue";
import registerSchema from "~/schemas/register";
import type RefreshResponse from "~/types/auth/refreshResponse";

definePageMeta({
    layout: "auth",
});

const passwordType = ref<InputType>("password");

const route = useRouter();

const { handleSubmit, errors } = useForm({
    validationSchema: registerSchema,
});

const { value: email } = useField("email");
const { value: username } = useField("username");
const { value: password } = useField("password");

const { execute, error } = useFetch<RefreshResponse>("/auth/register", {
    baseURL: "http://localhost:5000",
    method: "post",
    body: {
        email,
        password,
        username,
    },
    immediate: false,
    credentials: "include",
    watch: false,
    onResponse: () => {
        if (!error.value) route.push({ path: "/login" });
    },
});

const onRegister = handleSubmit((values) => execute());

// TODO: make it lazy to only show on submit
const showErrors = ref(true);
</script>

<template>
    <div
        class="w-full h-full flex flex-col text-grayText items-center justify-center p-8 gap-8"
    >
        <h1 class="text-4xl">Register</h1>
        <form
            class="flex flex-col w-full gap-6 items-center"
            @submit="onRegister"
        >
            <div class="input-wrapper">
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    v-model="email"
                />
                <span v-if="showErrors" class="error">{{ errors.email }}</span>
            </div>

            <div class="input-wrapper">
                <input
                    type="text"
                    name="password"
                    placeholder="username"
                    v-model="username"
                />
                <span v-if="showErrors" class="error">{{
                    errors.username
                }}</span>
            </div>

            <div class="relative w-full">
                <input
                    :type="passwordType"
                    placeholder="password"
                    name="password"
                    v-model="password"
                />
                <EyeIcon
                    @text="passwordType = 'text'"
                    @password="passwordType = 'password'"
                    :password-type="passwordType"
                    class="absolute right-4 top-1/2 -translate-y-1/2"
                />
                <span v-if="showErrors" class="error">{{
                    errors.password
                }}</span>
            </div>

            <button
                class="py-3 px-8 mt-4 rounded border border-light bg-transparent"
                type="submit"
            >
                Register
            </button>
        </form>
        <div class="flex gap-2">
            <span class="font-light">Already have an account?</span>
            <NuxtLink class="font-semibold" to="/login">Login</NuxtLink>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
input {
    @apply w-full p-4 rounded border border-light bg-transparent;
}

.input-wrapper {
    @apply w-full;
}

.error {
    @apply text-red-500 text-sm;
}
</style>
