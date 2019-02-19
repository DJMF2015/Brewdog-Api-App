const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', event => {
    const names = event.detail;
    this.populate(names)
  });

  this.element.addEventListener('change', (event) => {
    const selectedName = event.target.value;
    //console.log(selectedName);
    PubSub.publish('Beers:SelectView:beers-selected', selectedName);
  })
};

SelectView.prototype.populate = function (beers) {
  beers.forEach((beer) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
