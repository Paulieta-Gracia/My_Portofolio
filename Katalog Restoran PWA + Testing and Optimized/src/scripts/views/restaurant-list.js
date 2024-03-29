import DataRestaurant from '../data/data-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <div class="hero">
          <picture>
            <source media="(max-width: 600px)" srcset="./public/images/heros/hero-image_2-small.jpg">
            <img class="hero-img" src="./public/images/heros/hero-image_2.jpg" 
            alt="food-picture">
          </picture>
          <div class="hero-text">
            <p class="welcome-text">Welcome</p>
            <p class="to-text">to</p>
            <h1 class="hero-logo">Foodie</h1>
          </div>
      </div>

      <p class="content-text" id="content-text">Explore Restaurant</p>
      <div class="restaurant-container" id="restaurant-container">
          <div id="restaurant-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await DataRestaurant.RestaurantsList();
    const restaurantsContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
