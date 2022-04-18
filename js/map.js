import { toggleAdFormState, toggleFilterState } from './state.js';
import { getSimilarCard } from './render-card.js';
import { getData } from './api.js';
import { renderError } from './failed-request.js';
import { createMainPin, createAdPin } from './create-pins.js';
import { MAP_SETTINGS, setDefaultAddress } from './map-defaults.js';

const OFFERS_LENGTH = 10;
const map = L.map('map-canvas');
const address = document.querySelector('#address');

const mainPinMarker = L.marker(
  {
    lat: MAP_SETTINGS.lat,
    lng: MAP_SETTINGS.lng
  },
  {
    draggable: true,
    icon: createMainPin(),
  },
);
const setMainPinMarkerCoords = (coords) => mainPinMarker.setLatLng([coords.lat, coords.lng]);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offer) => {
  const {location} = offer;
  const adMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: createAdPin(),
    },
  );
  adMarker
    .addTo(markerGroup)
    .bindPopup(getSimilarCard(offer));
};

const renderMarkers = (offers) => {
  offers.forEach((offer) => createMarker(offer));
};

const onSuccess = (point) => {
  toggleAdFormState(false);
  toggleFilterState(false);
  setDefaultAddress();
  renderMarkers(point.slice(0, OFFERS_LENGTH));
};

const onError = () => {
  renderError();
  toggleFilterState();
};

mainPinMarker.addTo(map);

const createMap = () => {
  map
    .on('load', () => {
      getData(
        onSuccess,
        onError
      );
    })
    .setView({
      lat: MAP_SETTINGS.lat,
      lng: MAP_SETTINGS.lng,
    }, 13);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

const resetMap = () => {
  setMainPinMarkerCoords(MAP_SETTINGS);
};

export { createMap, resetMap };
