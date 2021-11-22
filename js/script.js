/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */
const nav = document.querySelector('.js-nav');
const bookmarkBtn = document.querySelector('.js-bookmark');
const hamburgerBtn = document.querySelector('.js-hamburger');
const selectBtns = document.querySelectorAll('.js-select');
const modalCloseBtn = document.querySelector('.js-modal-close');
const modalBg = document.querySelector('.js-modal-bg');
const modals = document.querySelectorAll('.js-modal');
const wrapperFlex = document.querySelector('.js-wrapper-flex');
const checkboxes = document.querySelectorAll('.js-checkbox');
const checkedBlocks = document.querySelectorAll('.js-checked');

const [modalLarge, modalSmall] = modals;
const [checkOne, checkTwo] = checkboxes;
const [blockOne, blockTwo] = checkedBlocks;

console.log(checkOne, checkTwo);
console.log(blockOne, blockTwo);

const toggleNav = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerBtn.innerHTML = `
    <img 
        src="./images/icon-close-menu.svg"
        alt="" 
        aria-hidden="true"
        class="crowdfund__hamburger" 
    />`;
  } else {
    nav.classList.remove('open-nav');
    hamburgerBtn.innerHTML = `
    <img 
        src="./images/icon-hamburger.svg"
        alt="" aria-hidden="true"
        class="crowdfund__hamburger" 
    />`;
  }
};

const toggleBookamrkBtn = function () {
  if (!bookmarkBtn.classList.contains('bookmarked')) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = `
    <img 
        src="./images/icon-bookmark.svg"
        alt="" 
        aria-hidden="true" 
        class="crowdfund__bookmark" 
    /> Bookmarked`;
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = `
    <img 
        src="./images/icon-bookmark.svg"
        alt="" 
        aria-hidden="true" 
        class="crowdfund__bookmark" 
    /> Bookmark`;
  }
};

selectBtns.forEach((btn) =>
  btn.addEventListener('click', () => {
    modalBg.classList.add('is-visible');
    modalLarge.classList.add('is-visible');
  })
);

modalCloseBtn.addEventListener('click', () => {
  modalBg.classList.remove('is-visible');
  modalLarge.classList.remove('is-visible');
});

hamburgerBtn.addEventListener('click', toggleNav);
bookmarkBtn.addEventListener('click', toggleBookamrkBtn);
