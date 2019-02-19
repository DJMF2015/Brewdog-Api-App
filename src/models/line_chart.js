const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

const LineChart = function(title, name, data, container) {
  const today = new Date("Dec 31, 2018 24:00:00");
  const chart = new Highcharts.Chart({
    chart: {
      renderTo: container,
    },
    navigator: {
      series: {
        includeInCSVExport: true
      }
    },
    title: {
      text: title
    },
    series: [
      {
        name: name,
        color: 'blue',
        data: data
      }
    ],
    yAxis: {
    title: {
      text:  'Beers ABV %'
    }
  },
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart      : today - 24 * 3600 * 1000 * 365,
      pointInterval   : 24 * 3600 * 1000 * 31,
      pointEnd        :today
    }
  },
  xAxis      : {
    min: today - 24 * 3600 * 1000 * 365,
    max:  today,
    allowDecimals: false,
    type         : 'datetime',

  },
});

};









module.exports = LineChart;
