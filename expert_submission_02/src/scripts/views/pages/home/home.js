import './style.css';
import CONFIG from '../../../constant/config';
import RestaurantDataSource from '../../../data/restaurant-source';
const Home = {
  async render() {
    return `
        <div class="jumbotron">
          <img src="./images/heros/hero-image.jpg" alt="This jumbotron image">
        </div>
        <h2 class="subheading"><span class="line-center">Explore Restaurant</span></h2>
        <div class="wrapper-catalog">
          <div class='placeholder-catalog'></div>
          <div class='placeholder-catalog'></div>
          <div class='placeholder-catalog'></div>
          <div class='placeholder-catalog'></div>
          <div class='placeholder-catalog'></div>
          <div class='placeholder-catalog'></div>
        </div>
        <div class='error-msg'>
          <h3>Opss Something wrong !!</h3>
          <p>Failed fetch Data</p>
        </div>
        `;
  },

  async afterRender() {
    // const data = await RestaurantDataSource.getListRestaurants();
    // console.log(data);
    // let restaurantElement = '';
    // if (data.status) {
    //   data.restaurants.forEach(resto => {
    //     restaurantElement += `
    //       <div class='catalog-item'>
    //           <img src='${CONFIG.BASE_URL + 'images/small/' + resto.pictureId}' class='thumbnail' alt='${resto.name}'>
    //           <div class='city'>${resto.city}</div>
    //           <a href='#'><h2>${resto.name}</h2></a>
    //           <div class='rating'><p>Ratings ${resto.rating}</p></div>
    //           <div class='catalog-body'>
    //           <p>${resto.description}</p>
    //           </div>
    //       </div>`
    //   });
    //   document.querySelector('.wrapper-catalog').innerHTML = restaurantElement;
    // } else {

    // }
    const errorElement = ``;
    document.querySelector('.wrapper-catalog').innerHTML = '';

  },

};

export default Home;
