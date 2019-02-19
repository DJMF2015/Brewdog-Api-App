const ChartHelper = function(beers) {
  const beersData = [];
  for(beverage of beers) {
    beersData.push({
      name: beverage.name,
      y: beverage.abv
    });
  }

  return beersData;
}

module.exports = ChartHelper;
