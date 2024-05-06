import SortEventsView from '../view/sort-events-view.js';
import PointsListView from '../view/points-list-view.js';
import NewPointView from '../view/new-point-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render, RenderPosition} from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortEventsView();
  listComponent = new PointsListView();

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
    this.destinations = this.pointsModel.getDestinations();
    this.offers = this.pointsModel.getOffers();
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.listComponent, this.container);
    render(new NewPointView({point: this.points[0], destinations: this.destinations, offers: this.offers}), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);

    this.points.forEach((point) => render(new TripPointView({point, destinations: this.destinations, offers: this.offers}), this.listComponent.getElement(), RenderPosition.BEFOREEND));
  }
}
