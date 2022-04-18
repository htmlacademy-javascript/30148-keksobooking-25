const getRandom = (min, max) => {
  if(min >= max) {
    throw new Error('Max should be more than min');
  }
  return min + Math.random() * (max - min + 1);
};

const getRandomInteger = (min = 0, max = 1) => {
  if(min < 0 || max < 0) {
    throw new Error('Only 0 or positive');
  }
  return Math.floor(getRandom(min, max));
};

const getRandomFloat = (min = 0, max = 1, digits = 0)  => {
  if(min < 0 || max < 0) {
    throw new Error('Only 0 or positive');
  }
  return parseFloat(getRandom(min, max).toFixed(digits));
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const shuffle = (arr) => {
  const result = arr.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const getUniqueArr = (arr) => {
  const randomLength = getRandomInteger(1, arr.length);
  const sortedArr = shuffle(arr);

  return sortedArr.slice(0, randomLength);
};

const isEscapeKey = (key) => key === 'Escape';

export {
  getRandom,
  getRandomInteger,
  getRandomFloat,
  getRandomElement,
  getUniqueArr,
  isEscapeKey
};
