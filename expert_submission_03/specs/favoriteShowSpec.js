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

    it('should show the information that if empty', (done) => {
      document.querySelector('.wrapper-catalog')
          .addEventListener('restaurant:updated', () => {
            const textError = document.querySelectorAll('.title-error');
            expect(textError.length).toEqual(1);
            expect(textError[0].textContent).toEqual('Favorite Empty !');
            done();
          });
      const favoriteDatabase = spyOnAllFunctions(FavoriteDatabase);
      favoriteDatabase.getRestaurants.and.returnValues([]);
      new FavoritePresenter({view, favoriteRestaurant: favoriteDatabase});
    });
  });

  describe('When favorite restaurant exist', () => {
    it('should show the restaurant', (done) => {
      document.querySelector('.wrapper-catalog')
          .addEventListener('restaurant:updated', () => {
            expect(document.querySelectorAll('.catalog-item')
                .length).toEqual(3);
            done();
          });
      const dummyRestaurant = [
        {
          id: '6c7bqjgi84kcowlqdz',
          name: 'Bring Your Phone Cafe',
          description: 'Lorem ipsum dolor sit amet, consectetuer',
          pictureId: 'https://restaurant-api.dicoding.dev/images/medium/41',
          city: 'Medan',
          rating: 4.6,
        },
        {
          id: 'ljx8i0qu2uckcowlqdz',
          name: 'Run The Gun',
          description: 'Lorem ipsum dolor sit amet, consectetuer',
          pictureId: 'https://restaurant-api.dicoding.dev/images/medium/07',
          city: 'Bali',
          rating: 4.6,
        },
        {
          id: 'fe8bbxoazddkcowlqdz',
          name: 'Pangsit Express',
          description: 'Lorem ipsum dolor sit amet, consectetuer',
          pictureId: 'https://restaurant-api.dicoding.dev/images/medium/29',
          city: 'Ternate',
          rating: 4.8,
        },
      ];
      const favoriteDatabase = spyOnAllFunctions(FavoriteDatabase);
      favoriteDatabase.getRestaurants.and.returnValues(dummyRestaurant);
      new FavoritePresenter({view, favoriteRestaurant: favoriteDatabase});
    });
  });
});
