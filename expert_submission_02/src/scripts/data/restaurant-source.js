import API_ENDPOINT from '../constant/constant-app';
class RestaurantDataSource {
    static async getListRestaurants() {
        try {
            const response = await fetch(API_ENDPOINT.HOME);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return {
                status: false,
                message: error.message,
            };
        }
    }
    static async getDetailRestaurant(restaurantId) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL + restaurantId);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return error;
        }
    }
    static async searchRestaurant(keyword) {
        try {
            const response = await fetch(API_ENDPOINT.SEARCH + keyword);
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            return error;
        }
    }
}
export default RestaurantDataSource;