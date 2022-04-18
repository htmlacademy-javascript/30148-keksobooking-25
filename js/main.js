import { getCards } from './create-card.js';
import { createMap } from './map.js';

import { initSlider } from './price-slider.js';
import { onDataSend } from './form.js';

const cards = getCards();

createMap(cards);

initSlider();
onDataSend();
