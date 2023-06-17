import {isActsAsFavoriteModel} from './contract/favoriteContract';
import FavoriteDatabase from '../src/scripts/utils/favorite-restaurant';


describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteDatabase.getRestaurants()).forEach(async (restaurant) => {
      await FavoriteDatabase.deleteRestaurant(restaurant.id);
    });
  });

  isActsAsFavoriteModel(FavoriteDatabase);
});
