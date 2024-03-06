import axios from 'axios'
const axiosInstance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_BASEURL,
    headers: { 'Content-type': 'application/json' }
});
axiosInstance.interceptors.request.use((config) => {
    const tokens = process.env.NEXT_PUBLIC_SPURTCMS_NEXTJS_STARTER_THEME_TOKEN
    if (tokens) {
        config.headers["Authorization"] = tokens;
    }
    return config;  
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
       

        switch (error.response.status) {
            case 400:
                handleBadRequest(error.response.data.message);
                break;

            case 401:
                handleUnauthorized(error.response.data.message);
                break;

            case 403:
                handleForbidden();
                break;

            case 404:
                handleNotFound(error.response.data.message);
                break;

            case 422:
                handleUnProcessableEntry(error.response.data.message);
                break;

            case 500:
                handleServerError(error.response.statusText);
                break;

            case 409:
                handleErrorMessages(error.response);
                break;

            case 503:
                handleServerError502();
                break;

            default:
                break;
        }

        return error.response;
    }
);

function handleForbidden() {
}

function handleBadRequest(error) {
}

function handleNotFound(error) {
}

function handleUnProcessableEntry(error) {
}

function handleServerError(error) {
}

function handleErrorMessages(error) {
}

function handleServerError502() {
}

function handleUnauthorized(error) {

}

export default axiosInstance