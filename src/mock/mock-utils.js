import {PHOTO} from './mock-const';


function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomPhotoURL() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return `${PHOTO}${randomNumber}`;
}

export {getRandomArrayElement, getRandomPhotoURL};
