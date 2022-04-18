const createMainPin = () => {
  const mainPinIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  return mainPinIcon;
};


const createAdPin = () => {
  const adPinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],

  });
  return adPinIcon;
};

export {createMainPin, createAdPin};
