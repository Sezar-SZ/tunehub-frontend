<script setup lang="ts">
export type InputType = "text" | "password";
interface Props {
    passwordType: InputType;
}

const emit = defineEmits(["text", "password"]);

const props = defineProps<Props>();

const togglePassword = () => {
    if (props.passwordType === "password") {
        emit("text");
    } else {
        emit("password");
    }
};
</script>

<template>
    <button
        type="button"
        class="absolute right-4 top-1/2 -translate-y-1/2"
        @click="togglePassword()"
    >
        <img
            v-show="props.passwordType === 'password'"
            src="~/assets/img/eye.svg"
        />
        <img
            v-show="props.passwordType === 'text'"
            src="~/assets/img/eye-off.svg"
        />
    </button>
</template>
