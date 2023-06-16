import FavoriteInitiator from '../../src/scripts/utils/favorite-initiator';
const createFavoriteButtonPresenter = async (restaurant) => {
  await FavoriteInitiator.init(
      document.querySelector('#btnfavorite'),
      restaurant,
  );
};
export {createFavoriteButtonPresenter};
