const toggleState = (element, className, value = false) => {
  element.classList.toggle(className, value);
  [...element.children].forEach((x) => {x.disabled = value;});
};

export { toggleState };
