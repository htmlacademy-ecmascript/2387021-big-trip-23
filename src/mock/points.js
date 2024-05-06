import {getRandomArrayElement} from './mock-utils.js';
import {PRICES} from './mock-const.js';
import {mockDestinations} from './destinations.js';
import {mockOffers} from './offers.js';

const mockPoints = [
  {
    id: '001',
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: '2019-07-10T09:15:56.845Z',
    dateTo: '2019-07-11T04:55:13.375Z',
    destination: mockDestinations[0],
    isFavorite: false,
    offers: [
      mockOffers[0].offers[0]
    ],
    type: mockOffers[0].type
  },
  {
    id: '002',
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: '2019-07-10T09:15:56.845Z',
    dateTo: '2019-07-11T04:55:13.375Z',
    destination: mockDestinations[1],
    isFavorite: true,
    offers: [
      mockOffers[1].offers[0],
      mockOffers[1].offers[1]
    ],
    type: mockOffers[1].type
  },
  {
    id: '003',
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: '2019-07-10T09:15:56.845Z',
    dateTo: '2019-07-11T04:55:13.375Z',
    destination: mockDestinations[2],
    isFavorite: false,
    offers: [
      mockOffers[2].offers[0]
    ],
    type: mockOffers[2].type
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
