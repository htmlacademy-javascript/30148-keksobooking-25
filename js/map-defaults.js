const MAP_SETTINGS = {
  lat: 35.68948,
  lng: 139.69170,
};
const address = document.querySelector('#address');

const setDefaultAddress = () => (address.value = `${MAP_SETTINGS.lat}, ${MAP_SETTINGS.lng}`);

export { MAP_SETTINGS, setDefaultAddress };
