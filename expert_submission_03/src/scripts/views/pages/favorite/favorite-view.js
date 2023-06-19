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
        html = movies.reduce((carry, restaurant) =>
          carry.concat(this.createFavoriteItemTemplate(restaurant)), '');
      }
    } catch (error) {
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
        <img src='${CONFIG.IMAGE_URL + resto.pictureId}' 
        class='thumbnail' alt='${resto.name}'>
        <div class='city'>${resto.city}</div>
        <a href='#/detail/${resto.id}'><h2>${resto.name}</h2></a>
        <div class='rating'><p>Ratings ${resto.rating}</p></div>
        <div class='catalog-body'>
        <p>${resto.description}</p>
        </div>
    </div>`;
  }
};

export default FavoriteView;
