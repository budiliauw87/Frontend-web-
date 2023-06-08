import './style.css';
import {placeholderItem} from '../../templates/placeholder-catalog';
const Favorite = {
  async render() {
    return `
    <h2 class="subheading">
      <span class="line-center">Favorite Restaurant</span>
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
    const subheading = document.querySelector('.subheading');
    btnReload.addEventListener('click', (event) => {
      subheading.style.display = 'block';
      errorElement.style.display = 'none';
      wrapperCatalog.innerHTML = placeholderItem;
      setTimeout(()=>{
        this.getDataFavorites();
      }, 2000);
    });
  },


  async getDataFavorites() {
    const wrapperCatalog = document.querySelector('.wrapper-catalog');
    const errorElement = document.querySelector('.error-msg');
    const subheading = document.querySelector('.subheading');
    subheading.style.display = 'none';
    const favoriteItems = '';
    errorElement.style.display = 'flex';
    wrapperCatalog.innerHTML = favoriteItems;
  },
};

export default Favorite;
