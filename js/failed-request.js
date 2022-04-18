const map = document.querySelector('.map');
const errorTemplate = document.querySelector('#loading-error')
  .content
  .querySelector('.error-loading');

const ERROR_MESSAGE = 'Не удалось загрузить объявления :(';

const renderError = () => {
  const error = errorTemplate.cloneNode(true);
  error.querySelector('.error__message').textContent = 	ERROR_MESSAGE;

  map.insertAdjacentElement('beforeend', error);
};

export { renderError };
