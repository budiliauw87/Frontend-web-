import './style.css';
import CONFIG from '../../../constant/config';
import {placeholderItem} from '../../templates/placeholder-catalog';
import FavoriteDatabase from '../../../utils/favorite-restaurant';
const Favorite = {
  async render() {
    return `
    <div class='error-msg'>
        <h2 class="subheading">
          <span class="line-center">Favorite Restaurant</span>
        </h2>
        <div class='wrapper-catalog'>${placeholderItem}</div>
        <h3 class='title-error'>Opss Something wrong !!</h3>
        <button type='button' id='btnreload'>Reload</button>
    </div>`;
  },

  async afterRender() {
    const titleError = document.querySelector('.title-error');
    const btnReload = document.querySelector('#btnreload');
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    const subheading = document.querySelector('.subheading');
    btnReload.addEventListener('click', (event) => {
      subheading.style.display = 'block';
      titleError.style.display = 'none';
      btnReload.style.display = 'none';
      wrapperCatalog.innerHTML = placeholderItem;
      setTimeout(()=>{
        this.getDataFavorites();
      }, 2000);
    });
    this.getDataFavorites();
  },


  async getDataFavorites() {
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    const errorElement = document.querySelector('.error-msg');
    const subheading = document.querySelector('.subheading');
    const btnReload = document.querySelector('#btnreload');
    const titleError = document.querySelector('.title-error');
    let favoriteItems = '';
    let isError = false;
    let isEmpty = false;
    let messageError ='Something Error!!';
    try {
      const favoritesList = await FavoriteDatabase.getRestaurants();
      if (favoritesList.length == 0) {
        messageError = 'Favorite Empty !';
        isError = true;
        isEmpty = true;
      } else {
        favoritesList.forEach((resto) => {
          favoriteItems += `
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
      }
    } catch (error) {
      isError = true;
      messageError ='Something Error!!';
      errorElement.style.display = 'block';
    } finally {
      if (isError) {
        favoriteItems = '';
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
      wrapperCatalog.innerHTML = favoriteItems;
    }
  },
};

export default Favorite;
