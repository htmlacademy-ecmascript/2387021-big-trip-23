import {createElement} from '../render.js';
import {FLIGHT_OFFERS, POINT_TYPE} from '../const.js';

const BLANK_FORM = {
  basePrice: '',
  dateFrom: '',
  dateTo: '',
  destination: '',
  isFavorite: false,
  offers: FLIGHT_OFFERS,
  type: POINT_TYPE[5]
};

function createPointTemplate (type) {
  return `<div class="event__type-item">
    <input id="event-type-${type.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type.toLowerCase()}">
    <label class="event__type-label  event__type-label--${type.toLowerCase()}" for="event-type-${type.toLowerCase()}-1">${type}</label>
  </div>`;
}

function createOffersItemTemplate ({id, title, price, checked}) {
  return `<div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${id}" type="checkbox" name="event-offer-${id}" ${checked ? 'checked' : ''}>
    <label class="event__offer-label" for="event-offer-${id}">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>`;
}

function createOffersTemplate (offers) {
  if (!offers || offers.length === 0) {
    return '';
  }

  const offersTemplate = offers.reduce((acc, offer) => acc + createOffersItemTemplate(offer), '');

  return `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${offersTemplate}
      </div>
    </section>`;
}

function createPhotosTemplate (photos) {
  if (!photos || photos.length === 0) {
    return '';
  }

  const photosList = photos.map((photo) =>
    `<img class="event__photo" src="${photo.src}" alt="${photo.description}">`
  ).join('');

  return `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${photosList}
      </div>
    </div>`;
}


function createDestinationTemplate (description, pictures) {
  if (!description || description.length === 0) {
    return '';
  }
  return `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
    ${createPhotosTemplate(pictures)}
  </section>`;
}

function createNewPointView(formData) {
  const {type, destination, basePrice, offers} = formData;
console.log(formData)
  const offersTemplate = createOffersTemplate(offers);
  const destinationTemplate = createDestinationTemplate(destination.description, destination.pictures);

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${POINT_TYPE.map((item)=> createPointTemplate(item)).join('')}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
      ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination}" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Cancel</button>
  </header>
  <section class="event__details">
  ${offersTemplate}
  ${destinationTemplate}
  </section>
</form>
</li>`;
}

export default class NewPointView {
  constructor({form = BLANK_FORM}) {
    this.form = form;
  }

  getTemplate() {
    return createNewPointView(this.form);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
