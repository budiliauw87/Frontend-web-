import './style.css';
import FavoriteDatabase from '../../../utils/favorite-restaurant';
import FavoritePresenter from './favorite-presenter';
import FavoriteView from './favorite-view';


const view = new FavoriteView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoritePresenter({view, favoriteRestaurant: FavoriteDatabase});
  },
};

export default Favorite;
