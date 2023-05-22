import './style.css';
import CONFIG from '../../../constant/config';
import RestaurantDataSource from '../../../data/restaurant-source';
import placeholderItem from '../../templates/placeholder-catalog';
const Home = {
  async render() {
    return `
        <div class="jumbotron">
          <img src="./images/heros/hero-image.jpg" alt="This jumbotron image">
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
              <img src='${CONFIG.IMAGE_URL + resto.pictureId}' 
              class='thumbnail' alt='${resto.name}'>
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
