import { createMap, onError } from './map.js';
import { getData } from './api.js';
import { initSlider } from './price-slider.js';
import { onDataSend } from './form.js';

getData((cards) => createMap(cards), () => {
  onError();
});

initSlider();
onDataSend();
