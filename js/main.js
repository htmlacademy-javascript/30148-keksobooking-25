// https://habr.com/ru/post/312880/

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

const getRandomFloatInteger = (min = 0, max = 1, digits = 0)  => {
  if(min < 0 || max < 0) {
    throw new Error('Only 0 or positive');
  }
  return parseFloat(getRandom(min, max).toFixed(digits));
};

getRandomInteger(0, 7);
getRandomFloatInteger(2, 44, 7);
