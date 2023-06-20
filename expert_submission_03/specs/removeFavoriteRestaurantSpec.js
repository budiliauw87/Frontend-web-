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
    await FavoriteDatabase.putRestaurant(restaurant);
  });

  afterEach(async () => {
    await FavoriteDatabase.deleteRestaurant(restaurant.id);
  });

  it(`should show icon fa-heart 
  when restaurnt adding to favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    expect(document.querySelector('.fa-heart'))
        .toBeTruthy();
  });

  it(`should show icon fa-heart-o  
  when restaurnt has not to favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    expect(document.querySelector('.fa-heart-o'))
        .toBeFalsy();
  });

  it('should be able to add favorite', async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    document.querySelector('#btnfavorite').dispatchEvent(new Event('click'));
    expect(await FavoriteDatabase.getRestaurants()).toEqual([]);
  });

  it(`should not throw error if the 
  is restaurant not in the list favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(restaurant);
    await FavoriteDatabase.deleteRestaurant(restaurant.id);
    document.querySelector('#btnfavorite').dispatchEvent(new Event('click'));
    expect(await FavoriteDatabase.getRestaurants()).toEqual([]);
  });
});

