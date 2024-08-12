// https://github.com/unjs/ofetch/issues/79#issuecomment-1813520537

import defu from "defu";
import type { UseFetchOptions } from "nuxt/app";

interface Response {
    accessToken: string;
}

export function useProtectedFetch<T>(
    url: string | (() => string),
    _options: UseFetchOptions<T> = {}
) {
    const config = useRuntimeConfig();

    const accessToken = useAccessToken();

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.API_URL,
        retry: 1,
        credentials: "include",
        retryStatusCodes: [401],

        onRequest({ options }) {
            if (accessToken.value) {
                if (!options.headers) {
                    options.headers = {};
                }

                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${accessToken.value}`,
                };
            }
        },
        async onResponseError({ response, error }) {
            if (response.status === 401) {
                const refreshResponse = await $fetch<Response>(
                    "/auth/refresh",
                    {
                        baseURL: config.public.API_URL,
                        credentials: "include",
                    }
                );
                if (refreshResponse.accessToken) {
                    accessToken.value = refreshResponse.accessToken;
                } else {
                    throw error;
                }
            }
        },
    };

    const params = defu(_options, defaults);
    return useFetch(url, params);
}
