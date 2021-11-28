/* eslint-disable no-unused-vars */
/* eslint-disable no-import-assign */
/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-import-module-exports */

import * as nav from './nav';
import * as modals from './modals';
import * as figures from './figures';

nav.hamburgerBtn.addEventListener('click', nav.toggleNav);
nav.bookmarkBtn.addEventListener('click', nav.toggleBookamrkBtn);

figures.selectBtns.forEach((btn) =>
  btn.addEventListener('click', modals.toggleModalBg)
);
modals.modalCloseBtns.forEach((btn) =>
  btn.addEventListener('click', modals.closeModal)
);
modals.checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', figures.toggleFigureStyles)
);
modals.inputs.forEach((input) =>
  input.addEventListener('input', (e) => figures.validateInputs(e))
);
figures.continueBtns.forEach((btn) =>
  btn.addEventListener('click', () => figures.addNumbersAndProgressBar())
);

window.addEventListener('load', () => {
  modals.inputs.forEach((input) => (input.value = ''));
});
