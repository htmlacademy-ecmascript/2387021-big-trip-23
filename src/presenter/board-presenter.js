import TripInfoView from '../view/trip-info-view.js';
import FilterEventsView from '../view/filter-events-view.js';
import SortEventsView from '../view/sort-events-view.js';
import PointsListView from '../view/points-list-view.js';
import NewPointView from '../view/new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import TripPointView from '../view/trip-point-view.js';
import {render, RenderPosition} from '../render.js';
import {tripMain, siteHeaderFilter, siteBodyContent} from '../main.js';

const RENDER_QUANTITY = 3;

export default class BoardPresenter {
  listComponent = new PointsListView();

  init() {
    render(new TripInfoView, tripMain, RenderPosition.AFTERBEGIN);
    render(new FilterEventsView, siteHeaderFilter);
    render(new SortEventsView, siteBodyContent, RenderPosition.AFTERBEGIN);
    render(this.listComponent, siteBodyContent);
    render(new NewPointView, this.listComponent.getElement(), RenderPosition.AFTERBEGIN);
    // render(new EditPointView, this.listComponent.getElement());

    for (let i = 0; i < RENDER_QUANTITY; i++) {
      render(new TripPointView, this.listComponent.getElement());
    }
  }
}
