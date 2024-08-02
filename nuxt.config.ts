// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],

    css: ["~/assets/css/main.css"],

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
