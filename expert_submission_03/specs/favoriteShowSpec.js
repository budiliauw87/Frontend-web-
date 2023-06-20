import FavoriteDatabase
  from '../src/scripts/data/favorite-restaurant';
import FavoriteView
  from '../src/scripts/views/pages/favorite/favorite-view';
import FavoritePresenter
  from '../src/scripts/views/pages/favorite/favorite-presenter';


// describe('Showing all favorite restaurant', () => {
//   let view;
//   const renderTemplate = () => {
//     view = new FavoriteView();
//     document.body.innerHTML = view.getTemplate();
//   };
//   beforeEach(() => {
//     renderTemplate();
//   });

//   describe('When no restaurants have been liked', () => {
//     it('should ask for the favorite restaurants', () => {
//       const favoriteRestaurants = spyOnAllFunctions(FavoriteDatabase);

//       new FavoritePresenter({
//         view,
//         favoriteRestaurants,
//       });
//       expect(favoriteRestaurants.favoriteRestaurants).toHaveBeenCalledTimes(1);
//     });
//   });
// });
