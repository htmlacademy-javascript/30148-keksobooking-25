import {getCards} from './create-card.js';
import {renderCard} from './render-card.js';


const cards = getCards();

renderCard(cards[0]);
