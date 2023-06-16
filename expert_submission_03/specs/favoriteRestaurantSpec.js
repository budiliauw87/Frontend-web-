import * as TestButtonFactory from './utils/factoryButtonTest';
import dummyDetail from '../src/scripts/data/data_detail.json';

describe('Favorite Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = `
    <button id='btnfavorite' class='btn-favorite'></button>`;
  };
  beforeEach(() => {
    addFavoriteButtonContainer();
  });
  it(`should show icon fa-heart-o button 
  when restaurnt not set to favorite`, async () => {
    await TestButtonFactory.createFavoriteButtonPresenter(dummyDetail);
    expect(document.querySelector('.fa-heart-o'))
        .toBeTruthy();
  });
  it(`should show icon fa-heart button 
  when restaurnt has set to favorite`, async () => {
    document.body.innerHTML = `
    <button id='btnfavorite' class='btn-favorite'></button>`;
    await TestButtonFactory.createFavoriteButtonPresenter(dummyDetail);
    expect(document.querySelector('.fa-heart'))
        .toBeFalsy();
  });
});

