import {getRandomInteger, getRandomFloat, getRandomElement, getUniqueArr} from './utils.js';
import {TITLES, TYPES, CHECKTIMES, FEATURES, DESCRIPTIONS, PHOTOS} from './mock.js';
const CARDS_COUNT = 10;


const getAvatarNumber = () => String(getRandomInteger(1, 10)).padStart(2, 0);
const getLocation = () => (
  {
    lat: getRandomFloat(35.65000, 35.70000, 5),
    lng: getRandomFloat(139.70000, 139.80000, 5)
  }
);

const createCard = () => {
  const location = getLocation();

  return {
    author: {
      avatar: `img/avatars/user${getAvatarNumber()}.png`
    },
    offer: {
      title: getRandomElement(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomInteger(0, 500000),
      type: getRandomElement(TYPES),
      rooms: getRandomInteger(0, 10),
      guests: getRandomInteger(0, 13),
      checkin: getRandomElement(CHECKTIMES),
      checkout: getRandomElement(CHECKTIMES),
      features: getUniqueArr(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photos: getUniqueArr(PHOTOS)
    },
    location: location
  };
};

const getCards = () => Array.from({length: CARDS_COUNT}, createCard);

export { getCards };
