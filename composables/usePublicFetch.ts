import defu from "defu";
import type { UseFetchOptions } from "nuxt/app";

export function usePublicFetch<T>(
    url: string | (() => string),
    _options: UseFetchOptions<T> = {}
) {
    const config = useRuntimeConfig();

    const defaults: UseFetchOptions<T> = {
        baseURL: config.public.API_URL,
    };

    const params = defu(_options, defaults);
    return useFetch(url, params);
}
