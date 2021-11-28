/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
/* eslint-disable implicit-arrow-linebreak */

const setImg = (imgName, className) =>
  `<img src="${imgName}.svg"
        alt=""
        aria-hidden="true"
        class="crowdfund__${className}"
    />`;

const classesRemover = (items, className) =>
  items.forEach((item) => item.classList.remove(className));

const setErrorState = function (item, msg) {
  item.classList.add('error-text');
  item.textContent = msg;
};

const setSuccessState = function (item) {
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
