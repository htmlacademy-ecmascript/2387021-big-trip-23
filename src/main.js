import BoardPresenter from './presenter/board-presenter.js';
import PointsModel from './model/points-model.js';

const siteMainHeader = document.querySelector('.page-header');
const tripMain = siteMainHeader.querySelector('.trip-main');
const siteHeaderFilter = siteMainHeader.querySelector('.trip-controls__filters');
const siteMainBody = document.querySelector('.page-main');
const siteBodyContent = siteMainBody.querySelector('.trip-events');

const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  pointsContainer: siteMainBody,
  pointsModel,
});

boardPresenter.init();

export {siteMainHeader, tripMain, siteHeaderFilter, siteMainBody, siteBodyContent};
