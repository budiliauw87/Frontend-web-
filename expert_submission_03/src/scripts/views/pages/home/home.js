import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import './style.css';
import CONFIG from '../../../constant/config';
import RestaurantDataSource from '../../../data/restaurant-source';
import {placeholderItem} from '../../templates/placeholder-catalog';
const Home = {
  async render() {
    return `
        <div class="jumbotron">
          <picture>
            <source 
            srcset="./images/heros/hero-small.webp 480w, 
            ./images/heros/hero-medium.webp 800w, 
            ./images/heros/hero-medium.webp 1000w" type="image/webp">
            <img 
            srcset="./images/heros/hero-small.jpg 480w, 
            ./images/heros/hero-medium.jpg 800w"
            data-src="./images/heros/hero-large.jpg" alt="This jumbotron image" 
            width="1000" height="300" class="lazyload">
          </picture>
        </div>
        <h2 class="subheading">
          <span class="line-center">Explore Restaurant</span>
        </h2>
        <div class='wrapper-catalog'>${placeholderItem}</div>
        <div class='error-msg'>
          <h3 class='title-error'>Opss Something wrong !!</h3>
          <button type='button' id='btnreload'>Reload</button>
        </div>`;
  },

  async afterRender() {
    const errorElement = document.querySelector('.error-msg');
    const btnReload = document.querySelector('#btnreload');
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    btnReload.addEventListener('click', (event) => {
      errorElement.style.display = 'none';
      wrapperCatalog.innerHTML = placeholderItem;
      this.getDataRestaurants();
    });
    this.getDataRestaurants();
  },

  async getDataRestaurants() {
    const data = await RestaurantDataSource.getListRestaurants();
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    const errorElement = document.querySelector('.error-msg');
    let restaurantElement = '';
    if (!data.error) {
      data.restaurants.forEach((resto) => {
        restaurantElement += `
          <div class='catalog-item'>
              <img data-src='${CONFIG.IMAGE_URL + resto.pictureId}' 
              class='thumbnail lazyload' alt='${resto.name}'>
              <div class='city'>${resto.city}</div>
              <a href='#/detail/${resto.id}'><h2>${resto.name}</h2></a>
              <div class='rating'><p>Ratings ${resto.rating}</p></div>
              <div class='catalog-body'>
              <p>${resto.description}</p>
              </div>
          </div>`;
      });
    } else {
      errorElement.style.display = 'flex';
    }
    wrapperCatalog.innerHTML = restaurantElement;
  },

};

export default Home;
