import {PRICE_CLASSIFICATION} from '../enum/filter-prices.js';

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const priceFilter = mapFilters.querySelector('#housing-price');
const roomsFilter = mapFilters.querySelector('#housing-rooms');
const guestsFilter = mapFilters.querySelector('#housing-guests');


const filterByHousingType = ({offer}) => housingTypeFilter.value === 'any' || offer.type === housingTypeFilter.value;

const filterByPrice = ({offer}) => offer.price >= PRICE_CLASSIFICATION[priceFilter.value].min && offer.price <= PRICE_CLASSIFICATION[priceFilter.value].max;

const filterByRooms = ({offer}) => (roomsFilter.value === 'any' || offer.rooms === Number(roomsFilter.value));

const filterByGuests = ({offer}) => (guestsFilter.value === 'any' || offer.guests === Number(guestsFilter.value));

const filterByFeatures = ({offer}) => {
  const filtersFeatures = [];
  const checkedFilters = document.querySelector('.map__features').querySelectorAll('input:checked');
  checkedFilters.map((el) => filtersFeatures.push(el.value));
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
