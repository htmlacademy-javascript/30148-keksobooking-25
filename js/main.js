import {getCards} from './create-card.js';
import {similarCard} from './similar-card.js';

const mapTemplate = document.querySelector('#map-canvas');
const cards = getCards();

mapTemplate.appendChild(similarCard(cards[0]));
