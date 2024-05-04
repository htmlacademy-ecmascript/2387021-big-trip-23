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
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];

    render(this.sortComponent, this.container, RenderPosition.AFTERBEGIN);
    render(this.listComponent, this.container);
    render(new NewPointView({point: this.points[0]}), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.points.length; i++) {
      render(new TripPointView({point: this.points[i]}), this.listComponent.getElement(), RenderPosition.BEFOREEND);
    }
  }
}
