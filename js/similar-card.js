const popupTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

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

const similarCard = ({offer, author}) => {
  const card = popupTemplate.cloneNode(true);
  renderTextNode(card, '.popup__title', offer.title);
  renderTextNode(card, '.popup__text--address', offer.address);
  renderTextNode(card, '.popup__text--price', offer.price, `${offer.price} ₽/ночь`);
  renderTextNode(card, '.popup__type', offer.type);
  renderTextNode(card, '.popup__text--capacity', (offer.rooms && offer.guests), `${offer.rooms} комнаты для ${offer.guests} гостей`);
  renderTextNode(card, '.popup__text--time', offer.checkin && offer.checkout, `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`);
  renderTextNode(card, '.popup__description', offer.description);

  if(author.avatar) {
    card.querySelector('.popup__avatar').src = author.avatar;
  } else {
    card.querySelector('.popup__avatar').classList.add('hidden');
  }

  if (offer.features) {
    generateFeatureList (card, offer.features);
  } else {
    card.querySelector('.popup__features').classList.add('hidden');
  }

  if (offer.photos) {
    generatePhotos (card, offer.photos);
  } else {
    card.querySelector('.popup__photos').classList.add('hidden');
  }

  return card;
};

export {similarCard};
