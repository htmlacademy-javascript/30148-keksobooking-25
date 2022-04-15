import { getCards } from './create-card.js';
import { renderCard } from './render-card.js';
import { toggleAdFormState, toggleFilterState } from './form.js';
import './form-validation.js';


const cards = getCards();

renderCard(cards[0]);

toggleAdFormState(false);
toggleFilterState(false);
