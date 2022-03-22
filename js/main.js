const CARDS_COUNT = 10;

const TITLES = [
  'Красивое',
  'Сарай для вас',
  'Роскошный эко-шалаш',
  'Многоэтажка в Воркуте',
  'Арт-подвал'
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];
const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00'
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const DESCRIPTION = [
  'Невероятный вид на рыбов',
  'Самый лучший сарай на Рублёвке',
  'Наслажитесь нашими натуральными комарами',
  'Целая многоэтажка для вашей заполярной тусовки',
  'Мы приветствуем рисунки на стенах'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandom = (min, max) => {
  if(min >= max) {
    throw new Error('Max should be more than min');
  }
  return min + Math.random() * (max - min + 1);
};

const getRandomInt = (min = 0, max = 1) => {
  if(min < 0 || max < 0) {
    throw new Error('Only 0 or positive');
  }
  return Math.floor(getRandom(min, max));
};

const getRandomFloatInt = (min = 0, max = 1, digits = 0)  => {
  if(min < 0 || max < 0) {
    throw new Error('Only 0 or positive');
  }
  return parseFloat(getRandom(min, max).toFixed(digits));
};

const getRandomArrEl = (els) => els[getRandomInt(0, els.length - 1)];

const getAvatarNumber = () => String(getRandomInt(1, 10)).padStart(2, 0);
// or
// const getAvatarNumber = () => {const n = getRandomInt(1, 10); return n < 10 ? `0${n}` : n;};

const getLocation = () => (
  {lat: getRandomFloatInt(35.65000, 35.70000), lng: getRandomFloatInt(139.70000, 139.80000)}
);
const shuffle = (arr) => {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
const getUniqueArr = (arr) => {
  const randomLength = getRandomInt(1, arr.length);
  const sortedArr = shuffle(arr);

  return sortedArr.slice(0,randomLength);
};

const createCard = () => ({
  author: {
    avatar: `img/avatars/user${getAvatarNumber()}.png`
  },
  offer: {
    title: getRandomArrEl(TITLES),
    address: `${getLocation().lat}, ${getLocation().lng}`,
    price: getRandomInt(0, 13),
    type: getRandomArrEl(TYPES),
    rooms: getRandomInt(0, 13),
    guests: getRandomInt(0, 13),
    checkin: getRandomArrEl(CHECKTIME),
    checkout: getRandomArrEl(CHECKTIME),
    features: getUniqueArr(FEATURES),
    description: getRandomArrEl(DESCRIPTION),
    photos: getUniqueArr(PHOTOS)
  },
  location: getLocation()
});

const cards = Array.from({length: CARDS_COUNT}, createCard);

console.log(cards);
