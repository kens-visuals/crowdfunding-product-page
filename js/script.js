/* eslint-disable no-param-reassign */
/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */

const nav = document.querySelector('.js-nav');
const bookmarkBtn = document.querySelector('.js-bookmark');
const hamburgerBtn = document.querySelector('.js-hamburger');
const modalCloseBtn = document.querySelector('.js-modal-close');

const modalBg = document.querySelector('.js-modal-bg');
const wrapperFlex = document.querySelector('.js-wrapper-flex');

const modals = document.querySelectorAll('.js-modal');
const figures = document.querySelectorAll('.js-figure');
const selectBtns = document.querySelectorAll('.js-select');
const checkboxes = document.querySelectorAll('.js-checkbox');
const checkedBlocks = document.querySelectorAll('.js-checked');

const [modalLarge, modalSmall] = modals;

const imgPath = (imgName, className) =>
  `<img src="./images/${imgName}.svg" alt="" aria-hidden="true" class="crowdfund__${className}" />`;

const classRemover = (items, className) =>
  items.forEach((item) => item.classList.remove(className));

const toggleNav = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerBtn.innerHTML = imgPath('icon-close-menu', 'hamburger');
  } else {
    nav.classList.remove('open-nav');
    hamburgerBtn.innerHTML = imgPath('icon-hamburger', 'hamburger');
  }
};

const toggleBookamrkBtn = function () {
  if (!bookmarkBtn.classList.contains('bookmarked')) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = `${imgPath(
      'icon-bookmark',
      'bookmark'
    )} Bookmarked`;
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = `${imgPath('icon-bookmark', 'bookmark')} Bookmark`;
  }
};

const toggleFigureStyles = function (e) {
  const target = e.target.closest('.js-figure');

  classRemover(figures, 'active-grid');
  classRemover(checkedBlocks, 'is-checked');

  target.classList.add('active-grid');
  target.lastElementChild.classList.add('is-checked');
};

hamburgerBtn.addEventListener('click', toggleNav);
bookmarkBtn.addEventListener('click', toggleBookamrkBtn);

selectBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    // eslint-disable-next-line no-return-assign
    checkboxes.forEach((checkbox) => (checkbox.checked = false));
    classRemover(figures, 'active-grid');
    classRemover(checkedBlocks, 'is-checked');

    modalBg.classList.add('is-modal-visible');
    modalLarge.classList.add('is-modal-visible');
  })
);

modalCloseBtn.addEventListener('click', () => {
  modalBg.classList.remove('is-modal-visible');
  modalLarge.classList.remove('is-modal-visible');
});

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', toggleFigureStyles)
);
