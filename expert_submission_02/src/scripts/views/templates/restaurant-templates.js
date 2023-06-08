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
        <button id='btnfavorite' class='btn-favorite'></button>
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
        <h2 class="subheading">
          <span class="line-center bg-white">Menu Restaurant</span>
        </h2>
        <div class='menu-info'>
          <div class='menu-list'>
            <h3>Food List</h3>
            ${tableMenus(restaurant.menus.foods)}
          </div>
            <div class='menu-list'>
            <h3>Drink List</h3>
            ${tableMenus(restaurant.menus.drinks)}
          </div>
        </div>
        
        <div class='card-footer'>
          <div class='footer-info'>
            <h3>Customer Reviews</h3>
            ${customerReviews(restaurant.customerReviews)}
          </div>
        </div>
        
      </div>
    </div>
  </div>`;
};

const iconFavorite = (isFavorite)=>{
  const icon = isFavorite ? 'fa fa-heart':'fa fa-heart-o';
  return `Favorite <i class='${icon}' aria-hidden='true'></i> `;
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
    const titleName = review.name.substring(0, 1);
    reviewElement+=`<div class='reviews'>
    <div class='profile-user'>
      <div class='avatar'>${titleName.toUpperCase()}</div>
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

export {restaurantElement, iconFavorite};
