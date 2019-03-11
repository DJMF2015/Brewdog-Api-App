const PubSub = require('../helpers/pub_sub.js');
const LineChart = require('../models/line_chart.js');

const LineChartView = function (container) {
  this.container = container;
};

LineChartView.prototype.renderLineChart = function (beersData, beerName){
  //this.container=innerHTML = '';
  const dataForGraph = beersData.map(beer => beer.method.mash_temp[0].duration);
  console.log(dataForGraph)
  const data= beersData.map(beer => beer.ingredients.yeast);
  console.log(data)
  const chartContainer = document.createElement('div');
  chartContainer.className = 'Line-Chart';
  const lineChart = new LineChart('Date Beers Brewed', beerName, dataForGraph, chartContainer)
  this.container.appendChild(chartContainer);

}



module.exports = LineChartView;
