import './style.css';

import UrlParser from "../../../routes/url-parser";
import RestaurantDataSource from "../../../data/restaurant-source";
const Detail = {
  async render() {
    return `
      <div class="restaurant-banner">
        <img src="./images/heros/hero-image.jpg" alt="">
      </div>
      <div class='content-detail'>
        <div class='restaurant-card'>
          <div class='card-title'>
            <h2>Title restaurant</h2>
          </div>
          <div class='card-body'>
            <div class='restaurant-info'>
              <div class='rating-info'>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <i class='fa fa-star'></i>
                  <span>3.5</span>
              </div>
              <div><i class='fa fa-comment'></i><span>15&nbsp;Reviews</span> </div>
              <div><i class='fa fa-map'></i><span>Gorontalo</span> </div>
            </div>
            <div class='category-info'>
              <ul>
                <li>Sop</li>
                <li>Moderen</li>
                <li>Best price</li>
              </ul>
            </div>
            <div class='descreption-info'>
            <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. 
            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit 
            amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas 
            nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit
             amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. 
             Sed consequat, leo eget bibendum sodales, augue velit cursus nunc</p>
            </div>
            <div class='card-footer'>
              <div class='footer-info'>
                <h3>Menu restaurant</h3>
                <table>
                  <tr>
                    <th>Foods</th>
                    <th>Drinks</th>
                  </tr>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                  </tr>
                </table>
              </div>
              <div class='footer-info'>
                <h3>Customer Reviews</h3>
                <div class='reviews'>
                  <div class='profile-user'>
                    <div class='avatar'>N</div>
                    <span>Name user</span>
                  </div>
                  <div class='reviews-user'>
                    <span>Date review : <strong>20 Mei 2023</strong></span>
                    <p>Tempatnya bagus namun menurut saya masih sedikit mahal.</p>
                  </div>
                </div>

                <div class='reviews'>
                  <div class='profile-user'>
                    <div class='avatar'>N</div>
                    <span>Name user</span>
                  </div>
                  <div class='reviews-user'>
                    <span>Date review : <strong>20 Mei 2023</strong></span>
                    <p>Tempatnya bagus namun menurut saya masih sedikit mahal.</p>
                  </div>
                </div>

                <div class='reviews'>
                  <div class='profile-user'>
                    <div class='avatar'>N</div>
                    <span>Name user</span>
                  </div>
                  <div class='reviews-user'>
                    <span>Date review : <strong>20 Mei 2023</strong></span>
                    <p>Tempatnya bagus namun menurut saya masih sedikit mahal.</p>
                  </div>
                </div>

              </div>

            </div>
            
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetail = await RestaurantDataSource.getDetailRestaurant(url.id);
    console.log(dataDetail);
    if (!dataDetail.error) {

    } else {

    }

  },
};

export default Detail;
