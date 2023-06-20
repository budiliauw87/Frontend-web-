import * as TestButtonFactory from './utils/factoryButtonTest';
import dataRestaurants from '../src/scripts/data/data.json';
import FavoriteDatabase from '../src/scripts/data/favorite-restaurant';

describe('Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `
    <button id='btnfavorite' class='btn-favorite'></button>`;
  };

  const restaurant = dataRestaurants.restaurants[0];

  beforeEach(async () => {
    addFavoriteButtonContainer();
  });

  it(`should show icon fa-heart-o
  when restaurnt not set to favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    expect(document.querySelector('.fa-heart-o'))
        .toBeTruthy();
  });

  it(`should not show icon fa-heart 
  when restaurnt has not to favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    expect(document.querySelector('.fa-heart'))
        .toBeFalsy();
  });

  it('should be able to add favorite', async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    document.querySelector('#btnfavorite').dispatchEvent(new Event('click'));
    const tempRestaurant = await FavoriteDatabase.getRestaurant(restaurant.id);
    console.log(`tempRestaurant`, tempRestaurant);
    expect(restaurant).toEqual(tempRestaurant);
    FavoriteDatabase.deleteRestaurant(restaurant.id);
  });
});

