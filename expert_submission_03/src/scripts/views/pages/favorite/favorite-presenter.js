class FavoritePresenter {
  constructor({view, favoriteRestaurant}) {
    this._view = view;
    this._favoriteRestaurant = favoriteRestaurant;
    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurant.getRestaurants();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    this._view.showRestaurants(restaurants);
  }
}

export default FavoritePresenter;
