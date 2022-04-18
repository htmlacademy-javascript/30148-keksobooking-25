import { isEscapeKey } from './utils.js';

const createPopup = (popup) => {
  document.body.append(popup);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt.key)) {
      evt.preventDefault();
      hidePopup(popup);
    }
  };

  function hidePopup() {
    popup.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }

  popup.addEventListener('click', () => hidePopup(popup));
  document.addEventListener('keydown', onPopupEscKeydown);
};

export { createPopup };
