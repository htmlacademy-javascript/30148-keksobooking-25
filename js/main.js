import { createMap, onError } from './map/map.js';
import { getData } from './api.js';
import { initSlider } from './form/price-slider.js';
import { onDataSend } from './form/form.js';
import { createPicturesPreview } from './photo.js';

getData((cards) => createMap(cards), () => {
  onError();
});

initSlider();
onDataSend();
createPicturesPreview();
