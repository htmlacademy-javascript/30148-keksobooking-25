import {getCards} from './create-card.js';

const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const mapTemplate = document.querySelector('#map-canvas');

const similarListFragment = document.createDocumentFragment();

const cards = getCards();

const generateFeatureList = (card, features) => {
  const featuresList = card.querySelector('.popup__features');
  featuresList.innerHTML = '';
  features.forEach((feature)=>{
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
    featuresList.appendChild(featureItem);
  });
};

const generatePhotos = (templateElement, data) => {
  const photosFragment = document.createDocumentFragment();
  const photosContainer = templateElement.querySelector('.popup__photos');
  const photoItem = photosContainer.querySelector('.popup__photo');

  data.forEach((photo) => {
    const photoTemplate = photoItem.cloneNode();
    photoTemplate.src = photo;
    photosFragment.append(photoTemplate);
  });

  photosContainer.innerHTML = '';
  photosContainer.append(photosFragment);
};

const createTextNode = (item, classTtle, text) => {
  item.querySelector(classTtle).textContent = text;
};

const hideTextNode = (item, classTtle) => {
  item.querySelector(classTtle).classList.add('hidden');
};

const renderTextNode = ((item, classTtle, value, text = value) => {
  if(value) {
    createTextNode(item, classTtle, text);
  } else {
    hideTextNode(item, classTtle);
  }
});

cards.forEach(({offer, author}) => {
  const cardElement = popupTemplate.cloneNode(true);
  renderTextNode(cardElement, '.popup__title', offer.title);
  renderTextNode(cardElement, '.popup__text--address', offer.address);
  renderTextNode(cardElement, '.popup__text--price', offer.price, `${offer.price} ₽/ночь`);
  renderTextNode(cardElement, '.popup__type', offer.type);
  renderTextNode(cardElement, '.popup__text--capacity', (offer.rooms && offer.guests), `${offer.rooms} комнаты для ${offer.guests} гостей`);
  renderTextNode(cardElement, '.popup__text--time', offer.checkin && offer.checkout, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  renderTextNode(cardElement, '.popup__description', offer.description);

  if(author.avatar) {
    cardElement.querySelector('.popup__avatar').src = author.avatar;
  } else {
    cardElement.querySelector('.popup__avatar').classList.add('hidden');
  }

  if (offer.features) {
    generateFeatureList (cardElement, offer.features);
  } else {
    cardElement.querySelector('.popup__features').classList.add('hidden');
  }

  if (offer.photos) {
    generatePhotos (cardElement, offer.photos);
  } else {
    cardElement.querySelector('.popup__photos').classList.add('hidden');
  }

  similarListFragment.appendChild(cardElement);
});

mapTemplate.appendChild(similarListFragment.firstChild);
