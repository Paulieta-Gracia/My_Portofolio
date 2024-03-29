import { itActsAsFavoriteRestaurantModel } from './favoriteRestaurantContract';
import FavoriteRestaurantIdb from '../src/scripts/views/favorite-list';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
      (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
      });
    });
   
    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
  });