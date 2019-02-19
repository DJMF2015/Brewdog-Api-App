const Beers = require('./models/beers.js');
const BeerView = require('./views/beer_view.js');
const BeerListView = require('./views/beer_list_view.js');
const SelectView = require('./views/select_view.js');
// const PieChartView = require('./views/pie_chart_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const beerSelect = document.querySelector('#beers');
  const beerSelectView = new SelectView(beerSelect);
  debugger
  beerSelectView.bindEvents();

  const beerContainer = document.querySelector('#beers-container');
  const beerView = new BeerView(beerContainer);
  beerView.bindEvents();


  const beer = new Beers();
  beer.bindEvents();
  beer.getBeers();

});
