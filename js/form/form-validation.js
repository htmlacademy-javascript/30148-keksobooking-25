import { OFFER_PRICES } from '../enum/offer-prices.js';
import { CAPACITY_OPTIONS } from '../enum/capacity.js';

const form = document.querySelector('.ad-form');
const price = form.querySelector('#price');
const adType = form.querySelector('#type');
const roomNumber = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const slider = document.querySelector('.ad-form__slider');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-msg',
}, false);

const validatePrice = () => price.value >= OFFER_PRICES[adType.value];

const validateRooms = (value) => CAPACITY_OPTIONS[roomNumber.value].includes(value);

const onAdTypeChange = () => {
  price.placeholder = OFFER_PRICES[adType.value];
  pristine.validate(validatePrice);

  const nouislider = slider.noUiSlider;
  nouislider.updateOptions({range: {
    min: OFFER_PRICES[adType.value],
    max: 100000
  }});
};

const onRoomsChange = () => {
  pristine.validate(validateRooms);
};

const typePriceErrorMsg = () => `Цена должна быть выше ${OFFER_PRICES[adType.value]}`;
const roomsErrorMsg = () => 'Количество гостей должно быть больше или равно количеству комнат';

adType.addEventListener('change', onAdTypeChange);
capacity.addEventListener('change', onRoomsChange);
roomNumber.addEventListener('change', onRoomsChange);
timein.addEventListener('change',() => {
  timeout.value = timein.value;
});
timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

pristine.addValidator(
  capacity,
  validateRooms,
  roomsErrorMsg
);

pristine.addValidator(
  price,
  validatePrice,
  typePriceErrorMsg
);

const validateForm = () => pristine.validate();

export { validateForm };
