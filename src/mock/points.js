import {getRandomArrayElement} from '../utils.js';
import {FILTERS, SORT, POINT_TYPE, CITIES, OFFERS, DESCRIPTION, PRICES, PHOTO} from '../const.js';

const mockPoints = [
  {
    'type': getRandomArrayElement(POINT_TYPE),
    'destination': getRandomArrayElement(CITIES),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'base_price': getRandomArrayElement(PRICES),
    'offers': [
      getRandomArrayElement(OFFERS)
    ],
    'is_favorite': true,
  },
  {
    'type': getRandomArrayElement(POINT_TYPE),
    'destination': getRandomArrayElement(CITIES),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'base_price': getRandomArrayElement(PRICES),
    'offers': [
      getRandomArrayElement(OFFERS)
    ],
    'is_favorite': false,
  },
  {
    'type': getRandomArrayElement(POINT_TYPE),
    'destination': getRandomArrayElement(CITIES),
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'base_price': getRandomArrayElement(PRICES),
    'offers': [
      getRandomArrayElement(OFFERS)
    ],
    'is_favorite': true,
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

const mockEditForm = [
  {

  }
];

export {getRandomPoint};
