import './style.css';

import UrlParser from '../../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-source';
import {placeholderDetailRestaurant} from '../../templates/placeholder-catalog';
import restaurantElement from '../../templates/restaurant-templates';
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
    } else {
      errorElement.style.display = 'flex';
    }
    const skipElelement = document.querySelector('.skip-link');
    skipElelement.scrollIntoView(true);
  },
};

export default Detail;
