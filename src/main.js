import {RenderPosition, render} from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterEventsView from './view/filter-events-view.js';
import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

const siteMainHeader = document.querySelector('.page-header');
const tripMain = siteMainHeader.querySelector('.trip-main');
const siteHeaderFilter = siteMainHeader.querySelector('.trip-controls__filters');
const siteMainBody = document.querySelector('.page-main');
const siteBodyContent = siteMainBody.querySelector('.trip-events');

render(new TripInfoView, tripMain, RenderPosition.AFTERBEGIN);
render(new FilterEventsView, siteHeaderFilter);

const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  container: siteBodyContent,
  pointsModel,
});

boardPresenter.init();
