import './style.css';

import UrlParser from '../../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-source';
import {placeholderDetailRestaurant} from '../../templates/placeholder-catalog';
const Detail = {
  async render() {
    return `
      <div class="restaurant-banner">
        <div class='placeholder-img shimmer'></div>
      </div>
      <div class='content-detail'>
        <div class='restaurant-card'>${placeholderDetailRestaurant}</div>
      </div>`;
  },

  async afterRender() {
    const errorElement = document.querySelector('.error-msg');
    const btnReload = document.querySelector('#btnreload');
    btnReload.addEventListener('click', (event) => {
      errorElement.style.display = 'none';
      wrapperCatalog.innerHTML = placeholderItem;
      this.getDetailRestaurant();
    });
    console.log(dataDetail);
    const skipElelement = document.querySelector('.skip-link');
    skipElelement.scrollIntoView(true);
  },
  async getDetailRestaurant() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetail = await RestaurantDataSource.getDetailRestaurant(url.id);
    if (!dataDetail.error) {

    }
  },
};

export default Detail;
