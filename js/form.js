import { sendData } from './api.js';
import { toggleSendBtnState } from './state.js';
import { createPopup } from './popup.js';
import { setDefaultAddress } from './map-defaults.js';
import { validateForm } from './form-validation.js';
import { resetMap } from './map.js';

const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const resetBtn = form.querySelector('.ad-form__reset');
const price = form.querySelector('#price');
const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const resetForm = () => {
  form.reset();
  filters.reset();
  toggleSendBtnState(false);
  setDefaultAddress();
  resetMap();
  price.placeholder = 1000;
};

resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const onSuccess = () => {
  resetForm();
  toggleSendBtnState(false);
  createPopup(successTemplate);
};

const onFail = () => {
  toggleSendBtnState(false);
  createPopup(errorTemplate);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const isValid = validateForm();

  if(isValid) {
    toggleSendBtnState();
    sendData(
      onSuccess,
      onFail,
      formData
    );
  }
});
