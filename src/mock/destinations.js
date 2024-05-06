import {getRandomArrayElement, getRandomPhotoURL} from './mock-utils.js';
import {CITIES, DESCRIPTION} from './mock-const.js';

const mockDestinations = [
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

export {mockDestinations};
