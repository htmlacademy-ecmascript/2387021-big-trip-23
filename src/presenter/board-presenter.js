import SortEventsView from '../view/sort-events-view.js';
import PointsListView from '../view/points-list-view.js';
import NewPointView from '../view/new-point-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render, replace, RenderPosition} from '../framework/render.js';

export default class BoardPresenter {
  #container = null;
  #pointsModel = null;
  // #destinations = null;
  // #offers = null;
  #points = [];

  #sortComponent = new SortEventsView();
  #listComponent = new PointsListView();

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];

    render(this.#sortComponent, this.#container, RenderPosition.AFTERBEGIN);
    render(this.#listComponent, this.#container);

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventComponent = new TripPointView({
      point,
      destinations: this.#pointsModel.destinations,
      offers: this.#pointsModel.offers,
      onEditClick: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }
    });

    const formComponent = new NewPointView({
      point,
      destinations: this.#pointsModel.destinations,
      offers: this.#pointsModel.offers,
      onFormSubmit: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    });

    function replaceEventToForm() {
      replace(formComponent, eventComponent);
    }

    function replaceFormToEvent () {
      replace(eventComponent, formComponent);
    }

    render(eventComponent, this.#listComponent.element, RenderPosition.BEFOREEND);
  }
}
