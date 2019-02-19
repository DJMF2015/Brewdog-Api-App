const PubSub = require('../helpers/pub_sub.js');
const LineChart = require('../models/line_chart.js');
// const LineChart = require('beer_view.js');

const LineChartView = function (container) {
  this.container = container;
};
//renderLineChart
LineChartView.prototype.renderLineChart = function (beersData, beerName){
  //this.container=innerHTML = '';
  const dataForGraph = beersData.map(beer => beer.abv);
  const chartContainer = document.createElement('div');
  chartContainer.className = 'Line-Chart';
  const lineChart = new LineChart('Date Beers Brewed', beerName, dataForGraph, chartContainer)
  this.container.appendChild(chartContainer);

}



module.exports = LineChartView;
