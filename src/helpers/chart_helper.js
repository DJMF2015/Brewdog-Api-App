const ChartHelper = function(beers) {
  const beersData = [];
  for(beverage of beers) {
    beersData.push({
      name: beverage.name, //The Doll
      y: beverage.abv // %4.0
    });
  }

  return beersData;
}

module.exports = ChartHelper;
