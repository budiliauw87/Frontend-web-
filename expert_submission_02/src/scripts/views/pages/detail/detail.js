import './style.css';

import UrlParser from '../../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-source';
import {placeholderDetailRestaurant} from '../../templates/placeholder-catalog';
import {restaurantElement} from '../../templates/restaurant-templates';
import FavoriteInitiator from '../../../utils/favorite-initiator';
const Detail = {
  async render() {
    return `
      <div class='wrapper-content'>
        ${placeholderDetailRestaurant}
      </div>
      <div class='error-msg'>
          <h3 class='title-error'>Opss Something wrong !!</h3>
          <button type='button' id='btnreload'>Reload</button>
      </div>
    `;
  },

  async afterRender() {
    const contentElement = document.querySelector('.wrapper-content');
    const errorElement = document.querySelector('.error-msg');
    const btnReload = document.querySelector('#btnreload');
    btnReload.addEventListener('click', (event) => {
      errorElement.style.display = 'none';
      contentElement.innerHTML = placeholderDetailRestaurant;
      setTimeout(()=> this.getDetailDataRestaurant(), 1000);
    });
    this.getDetailDataRestaurant();
  },

  async getDetailDataRestaurant() {
    const contentElement = document.querySelector('.wrapper-content');
    const errorElement = document.querySelector('.error-msg');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetail = await RestaurantDataSource.getDetailRestaurant(url.id);
    if (!dataDetail.error) {
      contentElement.innerHTML = restaurantElement(dataDetail.restaurant);
      const btnFavorite = document.querySelector('#btnfavorite');
      FavoriteInitiator.init(btnFavorite, dataDetail.restaurant);
    } else {
      errorElement.style.display = 'flex';
    }
    const skipElement = document.querySelector('.skip-link');
    skipElement.scrollIntoView(true);
  },
};

export default Detail;
