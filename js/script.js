/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */

const nav = document.querySelector('.js-nav');
const bookmarkBtn = document.querySelector('.js-bookmark');
const hamburgerBtn = document.querySelector('.js-hamburger');

const modals = document.querySelectorAll('.js-modal');
const modalBg = document.querySelector('.js-modal-bg');
const modalCloseBtns = document.querySelectorAll('.js-modal-close');

const figures = document.querySelectorAll('.js-figure');
const selectBtns = document.querySelectorAll('.js-select');
const checkboxes = document.querySelectorAll('.js-checkbox');
const checkedBlocks = document.querySelectorAll('.js-checked');
const inputs = document.querySelectorAll('.js-input');
const continueBtns = document.querySelectorAll('.js-continue');
const amountNum = document.querySelector('.js-amount-num');
const backerNum = document.querySelector('.js-backers-num');
const errorTexts = document.querySelectorAll('.js-error');
const progressBar = document.querySelector('.js-progressbar');

let inputAmount = 0;

const [modalLarge, modalSmall] = modals;

const setImg = (imgName, className) =>
  `<img src="./images/${imgName}.svg" 
        alt="" 
        aria-hidden="true" 
        class="crowdfund__${className}" 
    />`;

const classRemover = (items, className) =>
  items.forEach((item) => item.classList.remove(className));

const getNumber = (text) => +text.textContent.match(/\d/g).join('');
const formatNumber = () =>
  `$${Math.trunc(+inputAmount + getNumber(amountNum)).toLocaleString('en')}`;

const calcProgresBarWidth = function (total, target) {
  const percent = (total / target) * 100;
  return percent <= 100 ? percent : 100;
};

const setErrorState = function (item, msg) {
  item.classList.add('error-text');
  item.textContent = msg;
};

const setSuccessState = function (item) {
  item.classList.remove('error-text');
  item.textContent = 'Enter your pledge';
};

const toggleNav = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerBtn.innerHTML = setImg('icon-close-menu', 'hamburger');
  } else {
    nav.classList.remove('open-nav');
    hamburgerBtn.innerHTML = setImg('icon-hamburger', 'hamburger');
  }
};

const toggleBookamrkBtn = function () {
  if (!bookmarkBtn.classList.contains('bookmarked')) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = `${setImg('icon-bookmark', 'bookmark')} Bookmarked`;
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = `${setImg('icon-bookmark', 'bookmark')} Bookmark`;
  }
};

const closeModal = function () {
  modalBg.classList.remove('is-modal-visible');
  modalLarge.classList.remove('is-none');
  modalLarge.classList.remove('is-modal-visible');
  modalSmall.classList.remove('is-modal-visible');

  inputs.forEach((input) => {
    input.value = '';
  });

  errorTexts.forEach((text) => {
    setSuccessState(text);
  });

  document.body.classList.remove('is-overflow');
};

const toggleModalBg = function () {
  classRemover(figures, 'active-grid');
  classRemover(checkedBlocks, 'is-checked');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.body.classList.add('is-overflow');

  modalBg.classList.add('is-modal-visible');
  modalLarge.classList.add('is-modal-visible');
};

const toggleFigureStyles = function (e) {
  const target = e.target.closest('.js-figure');

  classRemover(figures, 'active-grid');
  classRemover(checkedBlocks, 'is-checked');

  target.classList.add('active-grid');
  target.lastElementChild.classList.add('is-checked');
};

const validateInput = function (e) {
  const { value, parentElement } = e.target;
  const errorText = parentElement.previousElementSibling;

  if (value === '0' || /^0\d+/g.test(value)) {
    setErrorState(errorText, 'Cannot be zero or start with zero');
  } else if (value > 999999) {
    setErrorState(errorText, 'WTF!!! WHO ARE YOU???');
  } else if (value < 0) {
    setErrorState(errorText, 'Cannot be negative');
  } else if (
    // eslint-disable-next-line no-useless-escape
    /[a-zA-Z,/<>\?;':""[\]\\{}\|`~!@#\$%\^&\*()_=\+\-]+/g.test(value)
  ) {
    setErrorState(errorText, 'Cannot be a letter or special character');
    // eslint-disable-next-line no-useless-escape
  } else if (value.split(/[\.]/).length > 2) {
    setErrorState(errorText, "Can't have two dots");
  } else if (e.target.id === 'amount-25' && value < 25) {
    setErrorState(errorText, 'Cannot be less than $25');
  } else if (e.target.id === 'amount-75' && value < 75) {
    setErrorState(errorText, 'Cannot be less than $75');
  } else {
    setSuccessState(errorText);
    inputAmount = value;
  }
};

continueBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    amountNum.textContent = formatNumber();
    backerNum.textContent = getNumber(backerNum) + 1;

    progressBar.style.width = `${calcProgresBarWidth(
      getNumber(amountNum),
      100000
    )}%`;

    modalLarge.classList.add('is-none');
    modalSmall.classList.add('is-modal-visible');

    document.body.classList.remove('is-overflow');
  })
);

hamburgerBtn.addEventListener('click', toggleNav);
bookmarkBtn.addEventListener('click', toggleBookamrkBtn);

selectBtns.forEach((btn) => btn.addEventListener('click', toggleModalBg));

modalCloseBtns.forEach((btn) => btn.addEventListener('click', closeModal));

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', toggleFigureStyles)
);

inputs.forEach((input) =>
  input.addEventListener('input', (e) => validateInput(e))
);

window.addEventListener('load', () => {
  inputAmount = 0;
  inputs.forEach((input) => {
    input.value = '';
  });
});
