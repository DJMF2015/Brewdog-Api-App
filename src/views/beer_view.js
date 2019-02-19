const PubSub = require('../helpers/pub_sub.js');
const BeerListView = require('./beer_list_view.js');
const LineChartView = require('./line_chart_view.js');
const PieChartHelper = require('../helpers/chart_helper.js');
const PieChart = require('../models/pie_chart.js');

const BeerView = function (container) {
  this.container = container;
  this.name = null;
};

BeerView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) => {

    this.name = event.detail.name;
    console.log(event.detail.name)
    this.render(event.detail);
   this.renderPieChart(event.detail)
    this.renderLineChart(event.detail);
  });
}

BeerView.prototype.render = function (beers) {
  // debugger
  this.container.innerHTML = '';
  const div = document.createElement('div');
  this.container.appendChild(div);

  for (beer of beers){ //in
    const beerItem = new BeerListView(beer, this.container)
    beerItem.render(); //wasn't being called in BeerListView
  }
};

BeerView.prototype.renderPieChart = function(beers){
  // this.container.innerHTML = '';
  const chartData = PieChartHelper(beers);
  const divContainer = document.createElement('div');
  divContainer.className = 'pie-chart';
  const pieChart = new PieChart('BrewDog Beers: % ABV', chartData, divContainer);
  this.container.appendChild(divContainer);
}

BeerView.prototype.renderLineChart = function (beersData) {
  const lineChartView = new LineChartView(this.container);
  lineChartView.renderLineChart(beersData, this.name);
};

BeerView.prototype.createBeerListItem = function (beer) {
  const beerListView = new BeerListView();
  const beerDetail = beerDetailView.createBeerList(beer);
  return beerDetail;
};

module.exports = BeerView;
