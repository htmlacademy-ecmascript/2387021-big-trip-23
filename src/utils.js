import dayjs from 'dayjs';
import {DATE_FORMAT, TIME_FORMAT, PHOTO} from './const.js';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function humanizeDueTime(dueTime) {
  return dueTime ? dayjs(dueTime).format(TIME_FORMAT) : '';
}

function getDuration(startTime, endTime) {
  const start = dayjs(startTime).startOf('minute');
  const end = dayjs(endTime).startOf('minute');
  const diffInMs = end.diff(start);
  // eslint-disable-next-line
  const duration = require('dayjs/plugin/duration');
  dayjs.extend(duration);
  const durationLol = dayjs.duration(diffInMs);

  const days = Math.floor(durationLol.asDays());
  const hours = durationLol.hours();
  const minutes = durationLol.minutes();

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  } else {
    return `${minutes.toString().padStart(2, '0')}M`;
  }
}

function getActiveClass(isActive, acriveClass) {
  return isActive ? acriveClass : '';
}

function getRandomPhotoURL() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  return `${PHOTO}${randomNumber}`;
}

export {getRandomArrayElement, humanizeDueDate, humanizeDueTime, getDuration, getActiveClass, getRandomPhotoURL};
