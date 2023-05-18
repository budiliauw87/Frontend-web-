import CONFIG from "./config";

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    DETAIL: `${CONFIG.BASE_URL}detail/`,
    SEARCH: `${CONFIG.BASE_URL}search?q=`,
    ADD_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
