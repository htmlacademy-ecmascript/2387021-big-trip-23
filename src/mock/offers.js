import {getRandomArrayElement} from './mock-utils.js';
import {POINT_TYPE, OFFERS, PRICES} from './mock-const.js';

const mockOffers = [
  {
    type: getRandomArrayElement(POINT_TYPE),
    offers: [
      {
        id: 'id_1',
        title: getRandomArrayElement(OFFERS),
        price: getRandomArrayElement(PRICES)
      }
    ]
  },
  {
    type: getRandomArrayElement(POINT_TYPE),
    offers: [
      {
        id: 'id_2',
        title: getRandomArrayElement(OFFERS),
        price: getRandomArrayElement(PRICES)
      },
      {
        id: 'id_3',
        title: getRandomArrayElement(OFFERS),
        price: getRandomArrayElement(PRICES)
      }
    ]
  },
  {
    type: getRandomArrayElement(POINT_TYPE),
    offers: [
      {
        id: 'id_4',
        title: getRandomArrayElement(OFFERS),
        price: getRandomArrayElement(PRICES)
      }
    ]
  }
];

export {mockOffers};
