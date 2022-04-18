import { OFFER_PRICES } from './enum/offer-prices.js';

const slider = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const adType = document.querySelector('#type');

const initSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: OFFER_PRICES[adType.value],
      max: 100000,
    },
    start: OFFER_PRICES[adType.value],
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  slider.noUiSlider.on('update', () => {
    price.value = slider.noUiSlider.get();
  });
};

export {initSlider};

// const onAdTypeChange = () => {
//   price.placeholder = OFFER_PRICES[adType.value];

//   slider.noUiSlider.updateOptions({
//     range: {
//       min: OFFER_PRICES[adType.value],
//       max: 100000
//     }
//   });
// };

// adType.addEventListener('change', onAdTypeChange);
