import { toggleState } from './state.js';

const adForm = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');

const toggleAdFormState = (value = true) => {
  toggleState(adForm, 'ad-form--disabled', value);
};
const toggleFilterState = (value = true) => {
  toggleState(filter, 'map__filters-disabled', value);
};

export {toggleAdFormState, toggleFilterState};
