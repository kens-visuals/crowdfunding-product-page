/* eslint-disable nonblock-statement-body-position */
/* eslint-disable curly */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */

/* eslint-disable no-useless-escape */

import {
  classesRemover,
  setErrorState,
  setSuccessState,
  getNumber,
  formatNumber,
  calcProgresBarWidth,
} from './helpers';

let inputAmount = 0;

const amountNum = document.querySelector('.js-amount-num');
const backerNum = document.querySelector('.js-backers-num');
const progressBar = document.querySelector('.js-progressbar');
const inputs = document.querySelectorAll('.js-input');
const modals = document.querySelectorAll('.js-modal');
const figures = document.querySelectorAll('.js-figure');
const selectBtns = document.querySelectorAll('.js-select');
const continueBtns = document.querySelectorAll('.js-continue');
const checkedBlocks = document.querySelectorAll('.js-checked');
const [modalLarge, modalSmall] = modals;

const toggleFigureStyles = function (e) {
  const target = e.target.closest('.js-figure');

  classesRemover(figures, 'active-grid');
  classesRemover(checkedBlocks, 'is-checked');

  target.classList.add('active-grid');
  target.lastElementChild.classList.add('is-checked');
};

const validateInputs = function (e) {
  const { value, parentElement, id } = e.target;
  const errorText = parentElement.previousElementSibling;
  const regExp = {
    zero: /^0\d+/g,
    letter: /[a-zA-Z,/<>\?;':""[\]\\{}\|`~!@#\$%\^&\*()_=\+\-]+/g,
  };

  if (value === '0' || regExp.zero.test(value)) {
    setErrorState(inputs, errorText, 'Cannot be zero or start with zero');
  } else if (value > 999999) {
    setErrorState(inputs, errorText, 'WTF!!! WHO ARE YOU???');
  } else if (value < 0) {
    setErrorState(inputs, errorText, 'Cannot be negative');
  } else if (regExp.letter.test(value)) {
    setErrorState(inputs, errorText, 'Cannot be a letter or special character');
  } else if (value.split(/[\.]/).length > 2) {
    setErrorState(inputs, errorText, "Can't have two dots");
  } else if (id === 'amount-25' && value < 25 && value !== '') {
    setErrorState(inputs, errorText, 'Cannot be less than $25');
  } else if (id === 'amount-75' && value < 75 && value !== '') {
    setErrorState(inputs, errorText, 'Cannot be less than $75');
  } else {
    setSuccessState(inputs, errorText);
    inputAmount = value;
  }
};

const addNumbersAndProgressBar = function () {
  if ([...inputs].some((input) => input.classList.contains('has-error')))
    return;

  amountNum.textContent = formatNumber(inputAmount, amountNum);
  backerNum.textContent = (getNumber(backerNum) + 1).toLocaleString('en');

  modalLarge.classList.add('is-none');
  modalSmall.classList.add('is-modal-visible');

  document.body.classList.remove('is-overflow');

  progressBar.style.width = `${calcProgresBarWidth(
    getNumber(amountNum),
    100000
  )}%`;
};

export {
  toggleFigureStyles,
  validateInputs,
  addNumbersAndProgressBar,
  figures,
  checkedBlocks,
  selectBtns,
  continueBtns,
};
