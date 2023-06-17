import {isActsAsFavoriteModel} from './contract/favoriteContract';
let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getRestaurants() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    favoriteRestaurant = favoriteRestaurant.filter(
        (restaurant) => restaurant.id !== id);
  },
};

describe('Favorite Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = []);
  isActsAsFavoriteModel(FavoriteRestaurantArray);
});
