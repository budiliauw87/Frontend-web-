import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  SEARCH: `${CONFIG.BASE_URL}search?q=`,
  ADD_REVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (restaurantId) => `${CONFIG.BASE_URL}detail/${restaurantId}`,
};

export default API_ENDPOINT;
