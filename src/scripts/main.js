'use strict';

const collectionLi = [...document.querySelectorAll('li')];
const tree = document.querySelector('.tree');

collectionLi.forEach((element) => {
  const span = document.createElement('span');
  // eslint-disable-next-line no-shadow
  const parent = element.parentNode;

  element.style.display = 'flex-block';
  span.appendChild(element);
  parent.appendChild(span);
});

// eslint-disable-next-line no-shadow
tree.addEventListener(
  'click',
  // eslint-disable-next-line no-shadow
  (event) => {
    const link = event.target.closest('li');

    if (!link) {
      return;
    }

    if (link.style.display === 'none') {
      link.style.display = 'box';
    } else {
      link.style.display = 'none';
    }
  },
  { capture: true },
);
