// https://habr.com/ru/post/312880/

const errorMsg = 'only 0 or positive';

const getRandom = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));

  const result = min + Math.random() * (max - min + 1);

  return result;
};

const getRandomInteger = (a = 0, b = 1) => a < 0 || b < 0 ? errorMsg : Math.floor(getRandom(a, b));

const getRandomFloatInteger = (a = 0, b = 1, digits = 0) => a < 0 || b < 0 ? errorMsg : parseFloat(getRandom(a, b).toFixed(digits));

getRandomInteger(597, 2);
getRandomFloatInteger(597.7, 2, 7);
