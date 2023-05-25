import CONFIG from '../../constant/config';
const restaurantElement = (restaurant)=>{
  return `<div class="restaurant-banner">
    <img src='${CONFIG.IMAGE_LARGE_URL + restaurant.pictureId}' 
    alt='${restaurant.name}'/>
  </div>
  <div class='content-detail'>
    <div class='restaurant-card'>
      <div class='card-title'>
        <h2>${restaurant.name}</h2>
      </div>
      <div class='card-body'>
        <div class='restaurant-info'>
          <div class='rating-info'>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <i class='fa fa-star'></i>
              <span>${restaurant.rating}</span>
          </div>
          <div>
            <i class='fa fa-comment'></i>
            <span>${restaurant.customerReviews.length}&nbsp;Reviews</span>
          </div>
          <div><i class='fa fa-map'></i><span>${restaurant.city}</span> </div>
        </div>
        <div class='category-info'>
          ${categoryRestaurant(restaurant.categories)}
        </div>
        <div class='descreption-info'>
        <p>${restaurant.description}</p>
        </div>
        <div class='card-footer'>
          <div class='footer-info'>
            <h3>Menu restaurant</h3>
            ${tableMenus(restaurant.menus.foods)}
            ${tableMenus(restaurant.menus.drinks)}
          </div>
          <div class='footer-info'>
            <h3>Customer Reviews</h3>
            ${customerReviews(restaurant.customerReviews)}
          </div>
        </div>
        
      </div>
    </div>
  </div>`;
};


const tableMenus = (menus)=>{
  let menuElement = '<ul>';
  menus.forEach((menu) => {
    menuElement +=`<li>${menu.name}</li>`;
  });
  menuElement +='</ul>';
  return menuElement;
};

const customerReviews = (reviews)=>{
  let reviewElement = `<div class='reviews-info'>`;
  reviews.forEach((review)=>{
    reviewElement+=`<div class='reviews'>
    <div class='profile-user'>
      <div class='avatar'>${review.name.substring(0, 1)}</div>
      <span>${review.name}</span>
    </div>
    <div class='reviews-user'>
      <span>Datetime : <strong>${review.date}</strong></span>
      <p>${review.review}</p>
    </div>
  </div>`;
  });
  reviewElement+='</div>';
  return reviewElement;
};

const categoryRestaurant = (categories)=>{
  let categoryTag = '<ul>';
  categories.forEach((category) => {
    categoryTag +=`<li>${category.name}</li>`;
  });
  categoryTag +='</ul>';
  return categoryTag;
};


export default restaurantElement;
