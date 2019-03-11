const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Beers = function () {
  this.beerData = [];
  this.tagline = [];
};

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:SelectView:beers-selected', (event) => {
    const selectedBeers =  event.detail;
    console.log(selectedBeers);
    const nameInChosenBeer = this.getListOfBeers(selectedBeers);
    console.log(nameInChosenBeer);
    PubSub.publish('Beers:beers-ready', nameInChosenBeer);
  });
};

Beers.prototype.getBeers = function () {
  const requestHelper = new RequestHelper('https://api.punkapi.com/v2/beers?page=2&per_page=10');
  requestHelper.get().then((beers) => { // should be .then((beers) => {})
    this.beerData = beers;
    const name = this.getListofNames();

    PubSub.publish('Beers:beers-ready', this.beerData);

  });
};

Beers.prototype.getListofNames = function () {
  return this.beerData
  .map(brew => brew.name)
  .filter((beer, index, beers) => beers.indexOf(beer) === index);
};

Beers.prototype.getListOfBeers = function (name) {

 const selected  = this.name;

  return this.beerData.filter(brew => brew.name === name);

};

module.exports = Beers;
