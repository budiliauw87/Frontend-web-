import {iconFavorite} from '../views/templates/restaurant-templates';
import FavoriteDatabase from '../data/favorite-restaurant';

const FavoriteInitiator = {
  async init(favoriteButton, restaurant) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;
    await this._renderIconFavorite();
  },
  async _renderIconFavorite() {
    const isFavorite = await this._checkIsExist(this._restaurant.id);
    this._favoriteButton.innerHTML = iconFavorite(isFavorite);
    this._favoriteButton.addEventListener('click', async ()=>{
      if (isFavorite) {
        console.log('removing from db');
        await FavoriteDatabase.deleteRestaurant(this._restaurant.id);
      } else {
        await FavoriteDatabase.putRestaurant(this._restaurant);
      }
      await this._renderIconFavorite();
    });
  },

  async _checkIsExist(id) {
    const tempRestaurant = await FavoriteDatabase.getRestaurant(id);
    console.log(tempRestaurant);
    return !!tempRestaurant;
  },
};

export default FavoriteInitiator;
