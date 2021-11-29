/* eslint-disable no-shadow */
/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */

// import { inputs } from './modals';

const setImg = (imgName, className) =>
  `<img src="${imgName}"
        alt=""
        aria-hidden="true"
        class="crowdfund__${className}"
    />`;

const classesRemover = (items, className) =>
  items.forEach((item) => item.classList.remove(className));

const setErrorState = function (inputs, item, msg) {
  inputs.forEach((input) => input.classList.add('has-error'));
  item.classList.add('error-text');
  item.textContent = msg;
};

const setSuccessState = function (inputs, item) {
  inputs.forEach((input) => input.classList.remove('has-error'));
  item.classList.remove('error-text');
  item.textContent = 'Enter your pledge';
};

const getNumber = (text) => +text.textContent.match(/\d/g).join('');

const formatNumber = (amount, num) =>
  `$${Math.trunc(+amount + getNumber(num)).toLocaleString('en')}`;

const calcProgresBarWidth = function (total, target) {
  const percent = (total / target) * 100;
  return percent <= 100 ? percent : 100;
};

export {
  setImg,
  classesRemover,
  setErrorState,
  setSuccessState,
  getNumber,
  formatNumber,
  calcProgresBarWidth,
};
