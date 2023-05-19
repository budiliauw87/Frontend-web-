import UrlParser from "../../../routes/url-parser";
import RestaurantDataSource from "../../../data/restaurant-source";
const Detail = {
  async render() {
    return `
      <div class="content">
        <h2 class="subheading"><span class="line-center">Detail</span></h2>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const dataDetail = RestaurantDataSource.getDetailRestaurant(url.id);
    if(!dataDetail.error){

    }else{
        
    }

  },
};

export default Detail;
