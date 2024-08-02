import axios from "axios";

function refreshRequest() {
    const url = `${process.env.API_URL}/auth/refresh/`;
    return axios.post(url, {}, { withCredentials: true });
}

const accessToken = useAccessToken();

const protectedAxios = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
});

protectedAxios.interceptors.request.use(async (config) => {
    if (config.headers && accessToken)
        config.headers["Authorization"] = `Bearer ${accessToken}`;

    // if (config.url && config.url.includes("/auth/"))
    //     config.withCredentials = true;

    return config;
});

protectedAxios.interceptors.response.use(
    (res) => {
        return res;
    },
    async (error) => {
        const originalConfig = error.config;
        if (error.response) {
            if (error.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;
                const res = await refreshRequest();
                const newToken = res.data["accessToken"];
                accessToken.value = newToken;
                let modifiedConfig = {
                    ...originalConfig,
                };
                modifiedConfig.headers["Authorization"] = `Bearer ${newToken}`;
                return axios(modifiedConfig);
            } else return Promise.reject(error);
        }
        return Promise.reject(error);
    }
);

export { protectedAxios };
