import API_ENDPOINT from '..constant/constant-app';
class RestaurantDataSource {
    static async nowPlayingMovies() {
        const response = await fetch(API_ENDPOINT.NOW_PLAYING);
        const responseJson = await response.json();
        return responseJson.results;
    }
}
export default RestaurantDataSource;