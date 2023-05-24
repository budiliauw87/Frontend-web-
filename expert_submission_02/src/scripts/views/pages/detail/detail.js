import './style.css';

import UrlParser from '../../../routes/url-parser';
import RestaurantDataSource from '../../../data/restaurant-source';
const Detail = {
  async render() {
    return `
      <div class='wrapper-content'>
        <div class="restaurant-banner">
          <div class='placeholder-img shimmer'></div>
        </div>
        <div class='content-detail'>
          <div class='restaurant-card'>
            <div class='card-title'>
              <div class='placeholder-title shimmer'></div>
            </div>
            <div class='card-body'>
              <div class='placeholder-info shimmer'></div>
              <div class='category-info'>
                <div class='placeholder-category shimmer'></div>
                <div class='placeholder-category shimmer'></div>
                <div class='placeholder-category shimmer'></div>
              </div>
              <div class='descreption-info'>
                <div class='placeholder-descreption full shimmer'></div>
                <div class='placeholder-descreption quarter shimmer'></div>
                <div class='placeholder-descreption half shimmer'></div>
              </div>
              <div class='card-footer'>
                <div class='footer-info'>
                  <div class='placeholder-second shimmer'></div>
                  <div class='placeholder-300 shimmer'></div>
                
                </div>
                <div class='footer-info'>
                  <div class='placeholder-second shimmer'></div>
                  <div class='placeholder-80 shimmer'></div>
                  <div class='placeholder-80 shimmer'></div>
                  <div class='placeholder-80 shimmer'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='error-msg'>
          <h3 class='title-error'>Opss Something wrong !!</h3>
          <button type='button' id='btnreload'>Reload</button>
      </div>
    `;
  },

  async afterRender() {
    const contentElement = document.querySelector('.wrapper-content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetail = await RestaurantDataSource.getDetailRestaurant(url.id);
    const errorElement = document.querySelector('.error-msg');
    errorElement.style.display = 'flex';
    contentElement.innerHTML = '';
    console.log(dataDetail);
  },
};

export default Detail;
