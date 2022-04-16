import { toggleAdFormState, toggleFilterState } from './form.js';
import { getCards } from './create-card.js';
import { getSimilarCard } from './render-card.js';

const address = document.querySelector('#address');
const DEFAULT_LAT = 35.68948;
const DEFAULT_LNG = 139.69170;
const cards = getCards();
const map = L.map('map-canvas');


const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const adPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(
  {
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offer) => {
  const {location} = offer;
  const adMarker = L.marker(
    {
      lat: location.lat,
      lng: location.lng,
    },
    {
      icon: adPinIcon,
    },
  );
  adMarker
    .addTo(markerGroup)
    .bindPopup(getSimilarCard(offer));
};

const renderMarkers = (offers) => {
  offers.forEach((offer) => createMarker(offer));
};

mainPinMarker.addTo(map);

map
  .on('load', () => {
    toggleAdFormState(false);
    toggleFilterState(false);
    address.value = `${DEFAULT_LAT}, ${DEFAULT_LNG}`;
    renderMarkers(cards);
  })
  .setView({
    lat: DEFAULT_LAT,
    lng: DEFAULT_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});
