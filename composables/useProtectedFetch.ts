// https://github.com/unjs/ofetch/issues/79#issuecomment-1813520537

import defu from "defu";
import type { UseFetchOptions } from "nuxt/app";

interface Response {
    access_token: string;
}

export function useProtectedFetch<T>(
    url: string | (() => string),
    _options: UseFetchOptions<T> = {}
) {
    const config = useRuntimeConfig();

    const accessToken = useAccessToken();

    console.log({ env: process.env.API_URL });

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.API_URL,
        retry: 1,
        credentials: "include",
        retryStatusCodes: [401],

        onRequest({ options }) {
            if (accessToken.value) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${accessToken}`,
                };
            }
        },
        async onResponseError({ response, options, request, error }) {
            if (response.status === 401) {
                const refreshResponse = await $fetch<Response>(
                    "/auth/refresh",
                    {
                        baseURL: config.public.API_URL,
                        credentials: "include",
                    }
                );
                if (refreshResponse.access_token) {
                    accessToken.value = refreshResponse.access_token;

                    options.headers = {
                        ...options.headers,
                        Authorization: `Bearer ${refreshResponse.access_token}`,
                    };

                    return $fetch(request, {
                        ...options,
                        method: options.method as Method,
                    });
                } else throw error;
                // .then((response) => {
                //     accessToken.value = response?.access_token;
                //     return response;
                // })
                // .catch((error) => {
                //     return error;
                // });
            }
        },
    };

    const params = defu(_options, defaults);
    return useFetch(url, params);
}

type Method =
    | "GET"
    | "HEAD"
    | "PATCH"
    | "POST"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "OPTIONS"
    | "TRACE"
    | undefined;
