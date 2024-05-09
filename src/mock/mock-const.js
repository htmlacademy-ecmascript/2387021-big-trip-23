
const PHOTO = 'https://loremflickr.com/248/152?random=';
const POINT_COUNT = 10;
const POINT_TYPE = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
const CITIES = ['Moscow', 'Rome', 'Paris', 'Lisboa', 'New York'];
const OFFERS = ['Order Uber', 'Add luggage', 'Rent a car', 'Add breakfast'];
const DESCRIPTION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.'];
const PRICES = [300, 600, 900, 1200];
const FLIGHT_OFFERS = [
  {
    id: 'luggage',
    title: 'Add luggage',
    price: 30,
    checked: true
  },
  {
    id: 'comfort',
    title: 'Switch to comfort class',
    price: 100,
    checked: true
  },
  {
    id: 'meal',
    title: 'Add meal',
    price: 15,
    checked: false
  }
];

export {PHOTO, POINT_COUNT, POINT_TYPE, CITIES, OFFERS, DESCRIPTION, PRICES, FLIGHT_OFFERS};
