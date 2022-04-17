import { getCards } from './create-card.js';
import { createMap } from './map.js';
import { validateForm } from './form-validation.js';
import { initSlider } from './price-slider.js';

const cards = getCards();

createMap(cards);

initSlider();
validateForm();
