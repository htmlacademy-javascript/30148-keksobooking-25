import {PRICE_CLASSIFICATION} from './enum/filter-prices.js';

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');


const filterByHousingType = ({offer}) => housingType.value === 'any' || offer.type === housingType.value;

const filterByPrice = ({offer}) => offer.price >= PRICE_CLASSIFICATION[price.value].min && offer.price <= PRICE_CLASSIFICATION[price.value].max;

const filterByRooms = ({offer}) => (rooms.value === 'any' || offer.rooms === Number(rooms.value));

const filterByGuests = ({offer}) => (guests.value === 'any' || offer.guests === Number(guests.value));

const filterByFeatures = ({offer}) => {
  const filtersFeatures = [];
  const checkedFilters = document.querySelector('.map__features').querySelectorAll('input:checked');
  checkedFilters.forEach((el) => filtersFeatures.push(el.value));
  if (offer.features) {
    return filtersFeatures.every((feature) => offer.features.includes(feature));
  }
  return false;
};

const filterOffers = (offers) => offers.filter((offer) => (
  filterByHousingType(offer) && filterByPrice(offer) && filterByRooms(offer) && filterByGuests(offer) && filterByFeatures(offer))
);

const setFilterChange = (cb) => {
  mapFilters.addEventListener('change', () => cb());
};

export { filterOffers, setFilterChange };
