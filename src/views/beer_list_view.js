const PubSub = require('../helpers/pub_sub.js');

const BeerListView = function (beer, parentE) {
  this.beerData = beer;
  this.parentElement = parentE;
};

BeerListView.prototype.render = function () {
  const container = document.createElement('div');
  container.classList.add('beer');
  container.classList.add('beer-list-view');
  console.log(this.beerData);

  const beerName = document.createElement('h2');
  beerName.textContent = this.beerData.name;
  container.appendChild(beerName);

  const tagline = document.createElement('p');
  tagline.textContent = `Beer: ${this.beerData.tagline}`;
  container.appendChild(tagline);

  const image = document.createElement('img');
  image.src = `${this.beerData.image_url}`;
  container.appendChild(image);

  const description = document.createElement('p');
  description.textContent = `Beer: ${this.beerData.description}`;
  container.appendChild(description);

  console.log(description);
  this.parentElement.appendChild(container);


};



module.exports =  BeerListView;
