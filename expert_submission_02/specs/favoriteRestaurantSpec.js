import FavoriteInitiator from '../src/scripts/utils/favorite-initiator';
import dummyDetail from '../src/scripts/data/data_detail.json';

describe('Adding Favorite Restaurant', () => {
  it(`should show icon fa-heart-o button 
  when restaurnt not set to favorite`, async () => {
    document.body.innerHTML = `
    <button id='btnfavorite' class='btn-favorite'></button>`;
    await FavoriteInitiator.init(
        document.querySelector('#btnfavorite'),
        dummyDetail,
    );
    expect(document.querySelector('.fa-heart-o'))
        .toBeTruthy();
  });
});

describe('Adding Favorite Restaurant', () => {
  it(`should show icon fa-heart button 
  when restaurnt has set to favorite`, async () => {
    document.body.innerHTML = `
    <button id='btnfavorite' class='btn-favorite'></button>`;
    await FavoriteInitiator.init(
        document.querySelector('#btnfavorite'),
        dummyDetail,
    );
    expect(document.querySelector('.fa-heart'))
        .toBeFalsy();
  });
});
