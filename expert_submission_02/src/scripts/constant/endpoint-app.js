import CONFIG from "./config";

const API_ENDPOINT = {
    HOME: `${CONFIG.BASE_URL}list`,
    SEARCH: `${CONFIG.BASE_URL}search?q=`,
    ADD_REVIEW: `${CONFIG.BASE_URL}review`,
    DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
