// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@nuxt/image",
        "@vee-validate/nuxt",
        "@primevue/nuxt-module",
    ],

    css: [
        "~/assets/css/main.css",
        "vue-toast-notification/dist/theme-default.css",
        "primeicons/primeicons.css",
    ],

    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL,
        },
    },

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.bunny.net/css?family=roboto:100,300,400,500,700,900",
                },
            ],
        },
    },
});
