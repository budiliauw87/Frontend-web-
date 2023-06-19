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

  _displayMovies(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoritePresenter;
