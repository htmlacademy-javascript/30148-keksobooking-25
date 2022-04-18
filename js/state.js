const adForm = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');
const sendBtn = document.querySelector('.ad-form__submit');

const toggleState = (element, className, value = false) => {
  element.classList.toggle(className, value);
  [...element.children].forEach((x) => {x.disabled = value;});
};


const toggleAdFormState = (value = true) => {
  toggleState(adForm, 'ad-form--disabled', value);
};

const toggleFilterState = (value = true) => {
  toggleState(filter, 'map__filters-disabled', value);
};

const toggleSendBtnState = (value = true) => {
  toggleState(sendBtn, 'ad-form--disabled', value);
};

export { toggleAdFormState, toggleFilterState, toggleSendBtnState };
