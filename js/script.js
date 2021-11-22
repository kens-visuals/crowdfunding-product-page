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
const wrapperFlex = document.querySelector('.js-wrapper-flex');
const modalCloseBtn = document.querySelector('.js-modal-close');

const figures = document.querySelectorAll('.js-figure');
const selectBtns = document.querySelectorAll('.js-select');
const checkboxes = document.querySelectorAll('.js-checkbox');
const checkedBlocks = document.querySelectorAll('.js-checked');
const inputs = document.querySelectorAll('.js-input');
// const errors = document.querySelectorAll('.js-error-text');

const [modalLarge, modalSmall] = modals;

const setImg = (imgName, className) =>
  `<img src="./images/${imgName}.svg" alt="" aria-hidden="true" class="crowdfund__${className}" />`;

const classRemover = (items, className) =>
  items.forEach((item) => item.classList.remove(className));

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
  modalLarge.classList.remove('is-modal-visible');
};

const toggleModalBg = function () {
  classRemover(figures, 'active-grid');
  classRemover(checkedBlocks, 'is-checked');
  // eslint-disable-next-line no-return-assign
  checkboxes.forEach((checkbox) => (checkbox.checked = false));

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
  } else if (value.split(/[\.]/).length > 2) {
    setErrorState(errorText, "Can't have two dots");
  } else {
    setSuccessState(errorText);
  }
};

hamburgerBtn.addEventListener('click', toggleNav);
bookmarkBtn.addEventListener('click', toggleBookamrkBtn);

selectBtns.forEach((btn) => btn.addEventListener('click', toggleModalBg));

modalCloseBtn.addEventListener('click', closeModal);

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', toggleFigureStyles)
);

inputs.forEach((input) =>
  input.addEventListener('input', (e) => validateInput(e))
);

window.addEventListener('load', () => {
  inputs.forEach((input) => {
    input.value = '';
  });
});
