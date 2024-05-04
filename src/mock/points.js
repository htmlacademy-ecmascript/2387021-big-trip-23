import {getRandomArrayElement, getRandomPhotoURL} from '../utils.js';
import {FILTERS, SORT, POINT_TYPE, CITIES, OFFERS, DESCRIPTION, PRICES} from '../const.js';

const mockDestination = [
  {
    id: '1',
    description: getRandomArrayElement(DESCRIPTION),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: getRandomPhotoURL(),
        description: 'description №1'
      }
    ]
  },
  {
    id: '2',
    description: getRandomArrayElement(DESCRIPTION),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: getRandomPhotoURL(),
        description: 'description №2'
      },
      {
        src: getRandomPhotoURL(),
        description: 'description №3'
      }
    ]
  },
  {
    id: '3',
    description: getRandomArrayElement(DESCRIPTION),
    name: getRandomArrayElement(CITIES),
    pictures: [
      {
        src: getRandomPhotoURL(),
        description: 'description №4'
      },
      {
        src: getRandomPhotoURL(),
        description: 'description №5'
      },
      {
        src: getRandomPhotoURL(),
        description: 'description №6'
      }
    ]
  }
];

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


const mockPoints = [
  {
    id: '001',
    basePrice: getRandomArrayElement(PRICES),
    dateFrom: '2019-07-10T09:15:56.845Z',
    dateTo: '2019-07-11T04:55:13.375Z',
    destination: mockDestination[0],
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
    destination: mockDestination[1],
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
    destination: mockDestination[2],
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
