import './style.css';
import data from '../../../data/data.json';
const Home = {
  async render() {
    return `
        <div class="jumbotron">
          <img src="./images/heros/hero-image.jpg" alt="This jumbotron image">
        </div>
        <h2 class="subheading"><span class="line-center">Explore Restaurant</span></h2>
        <div class="wrapper-catalog"></div>`;
  },

  async afterRender() {
    let restaurantElement = '';
    data.restaurants.forEach(resto => {
      restaurantElement += `
      <div class='catalog-item'>
          <img src='${resto.pictureId}' class='thumbnail' alt='${resto.name}'>
          <div class='city'>${resto.city}</div>
          <a href='#'><h2>${resto.name}</h2></a>
          <div class='rating'><p>Ratings ${resto.rating}</p></div>
          <div class='catalog-body'>
          <p>${resto.description}</p>
          </div>
      </div>`
    });
    setTimeout(() => {
      document.querySelector('.wrapper-catalog').innerHTML = restaurantElement;
    }, 1000);

  },
};

export default Home;
