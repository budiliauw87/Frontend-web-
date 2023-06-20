import FavoriteDatabase
  from '../src/scripts/data/favorite-restaurant';
import FavoriteView
  from '../src/scripts/views/pages/favorite/favorite-view';
import FavoritePresenter
  from '../src/scripts/views/pages/favorite/favorite-presenter';


describe('Showing all favorite restaurant', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteView();
    document.body.innerHTML = view.getTemplate();
  };
  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteDatabase = spyOnAllFunctions(FavoriteDatabase);
      new FavoritePresenter({view, favoriteRestaurant: favoriteDatabase});
      expect(favoriteDatabase.getRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that if empty', () => {
      expect(document.querySelectorAll('#btnreload').length).toEqual(1);
    });
  });
});
