import TripMainView from './view/trip-main-view.js';
import FilterEventsView from './view/filter-events-view.js';
import SortEventsView from './view/sort-events-view.js';
import NewPointView from './view/new-point-view.js';
import EditPointView from './view/edit-point-view.js';
import TripPointView from './view/trip-point-view.js';
import {render, RenderPosition} from './render.js';

const siteMainHeader = document.querySelector('.page-header');
const tripMain = siteMainHeader.querySelector('.trip-main');
const siteHeaderFilter = siteMainHeader.querySelector('.trip-controls__filters');
const siteMainBody = document.querySelector('.page-main');
const siteBodyContent = siteMainBody.querySelector('.trip-events');

const tripEventList = document.createElement('ul');
tripEventList.classList.add('trip-events__list');
siteBodyContent.appendChild(tripEventList);

const RENDER_QUANTITY = 3;

render(new TripMainView, tripMain, RenderPosition.AFTERBEGIN);
render(new FilterEventsView, siteHeaderFilter);
render(new SortEventsView, siteBodyContent, RenderPosition.AFTERBEGIN);
render(new NewPointView, tripEventList, RenderPosition.AFTERBEGIN);
// render(new EditPointView, tripEventList);

for (let i = 0; i < RENDER_QUANTITY; i++) {
  render(new TripPointView, tripEventList);
}

