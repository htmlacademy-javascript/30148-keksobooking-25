const GET_URL = 'https://25.javascript.pages.academy/keksobooking/data1';
const SEND_URL = 'https://25.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
    .then((ads) => onSuccess(ads))
    .catch((err) => onFail(err));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_URL,
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
