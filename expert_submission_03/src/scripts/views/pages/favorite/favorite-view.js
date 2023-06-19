import './style.css';
import CONFIG from '../../../constant/config';
import {placeholderItem} from '../../templates/placeholder-catalog';

class FavoriteView {
  getTemplate() {
    return `
    <div class='error-msg'>
        <h2 class="subheading">
          <span class="line-center">Favorite Restaurant</span>
        </h2>
        <div class='wrapper-catalog'>${placeholderItem}</div>
        <h3 class='title-error'>Opss Something wrong !!</h3>
        <button type='button' id='btnreload'>Reload</button>
    </div>`;
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    const errorElement = document.querySelector('.error-msg');
    const subheading = document.querySelector('.subheading');
    const btnReload = document.querySelector('#btnreload');
    const titleError = document.querySelector('.title-error');
    btnReload.addEventListener('click', (event) => {
      subheading.style.display = 'block';
      titleError.style.display = 'none';
      btnReload.style.display = 'none';
      wrapperCatalog.innerHTML = placeholderItem;
      setTimeout(() => {
        this.showFavoriteRestaurants(restaurants);
      }, 1000);
    });
    let isError = false;
    let isEmpty = false;
    let messageError ='Something Error!!';
    let html;
    try {
      if (restaurants.length == 0) {
        messageError = 'Favorite Empty !';
        isError = true;
        isEmpty = true;
      } else {
        html = restaurants.reduce((carry, restaurant) =>
          carry.concat(this.createFavoriteItemTemplate(restaurant)), '');
      }
    } catch (error) {
      console.log(error);
      isError = true;
      messageError ='Something Error!!';
      errorElement.style.display = 'block';
    } finally {
      if (isError) {
        html = '';
        subheading.style.display = 'none';
        titleError.innerText = messageError;
        titleError.style.display = 'block';
        errorElement.style.display = 'flex';
        btnReload.style.display = isEmpty ? 'none':'block';
      } else {
        titleError.style.display = 'none';
        btnReload.style.display = 'none';
        errorElement.style.display = 'block';
      }
      wrapperCatalog.innerHTML = html;
    }
  }

  createFavoriteItemTemplate(restaurant) {
    return `<div class='catalog-item'>
        <img src='${CONFIG.IMAGE_URL + restaurant.pictureId}' 
        class='thumbnail' alt='${restaurant.name}'>
        <div class='city'>${restaurant.city}</div>
        <a href='#/detail/${restaurant.id}'><h2>${restaurant.name}</h2></a>
        <div class='rating'><p>Ratings ${restaurant.rating}</p></div>
        <div class='catalog-body'>
        <p>${restaurant.description}</p>
        </div>
    </div>`;
  }
};

export default FavoriteView;
