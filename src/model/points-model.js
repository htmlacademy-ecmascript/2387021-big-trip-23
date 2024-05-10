import {getRandomPoint} from '../mock/points';
import {POINT_COUNT} from '../mock/mock-const';
import {mockOffers} from '../mock/offers';
import {mockDestinations} from '../mock/destinations';

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, getRandomPoint);
  #offers = mockOffers;
  #destinations = mockDestinations;

  get points() {
    return this.#points;
  }

  get offers() {
    return this.#offers;
  }

  get destinations() {
    return this.#destinations;
  }
}
