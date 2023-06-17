import dataRestaurants from '../../src/scripts/data/data.json';

const isActsAsFavoriteModel = (favoriteRestaurant) => {
  const restaurants = dataRestaurants.restaurants;
  it('should return restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant(restaurants[0]);
    favoriteRestaurant.putRestaurant(restaurants[1]);

    expect(await favoriteRestaurant.getRestaurant(restaurants[0].id))
        .toEqual(restaurants[0]);

    expect(await favoriteRestaurant.getRestaurant(restaurants[1].id))
        .toEqual(restaurants[1]);

    expect(await favoriteRestaurant.getRestaurant(3))
        .toEqual(undefined);
  });

  it('should refuse if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({aProperty: 'property'});

    expect(await favoriteRestaurant.getAllRestaurant())
        .toEqual([]);
  });

  it('can return all of that have been added', async () => {
    favoriteRestaurant.putRestaurant(restaurants[0]);
    favoriteRestaurant.putRestaurant(restaurants[1]);

    expect(await favoriteRestaurant.getAllRestaurant())
        .toEqual([
          restaurants[0],
          restaurants[1],
        ]);
  });

  it(`should handle request to remove 
      even though the movie has not been added`, async () => {
    favoriteRestaurant.putRestaurant(restaurants[0]);
    favoriteRestaurant.putRestaurant(restaurants[1]);

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurant())
        .toEqual([
          restaurants[0],
          restaurants[1],
        ]);
  });
};
export {isActsAsFavoriteModel};
