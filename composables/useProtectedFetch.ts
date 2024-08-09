// https://github.com/unjs/ofetch/issues/79#issuecomment-1813520537

import defu from "defu";
import type { UseFetchOptions } from "nuxt/app";

interface Response {
    access_token: string;
}

export function useCustomFetch<T>(
    url: string | (() => string),
    _options: UseFetchOptions<T> = {}
) {
    const accessToken = useAccessToken();

    const defaults: UseFetchOptions<T> = {
        baseURL: process.env.API_URL,
        retryStatusCodes: [401],
        retry: 1,
        onRequest({ options }) {
            if (accessToken.value) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${accessToken}`,
                };
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                const response = await $fetch<Response>("/auth/refresh", {
                    baseURL: process.env.API_URL,
                })
                    .then((response) => {
                        accessToken.value = response?.access_token;
                        return response;
                    })
                    .catch((error) => {
                        return error;
                    });
            }
        },
    };
    // for nice deep defaults, please use unjs/defu
    const params = defu(_options, defaults);
    return useFetch(url, params);
}
