/* eslint-disable object-curly-newline */
/* eslint-disable func-names */

import bookmarkImg from '../images/icon-bookmark.svg';
import hamburgerImg from '../images/icon-hamburger.svg';
import closeMenuImg from '../images/icon-close-menu.svg';

import { setImg } from './helpers';

// Navigation Variables
const nav = document.querySelector('.js-nav');
const bookmarkBtn = document.querySelector('.js-bookmark');
const hamburgerBtn = document.querySelector('.js-hamburger');

const toggleNav = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerBtn.innerHTML = setImg(closeMenuImg, 'hamburger');
  } else {
    nav.classList.remove('open-nav');
    hamburgerBtn.innerHTML = setImg(hamburgerImg, 'hamburger');
  }
};

const toggleBookamrkBtn = function () {
  if (!bookmarkBtn.classList.contains('bookmarked')) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = `${setImg(bookmarkImg, 'bookmark')} Bookmarked`;
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = `${setImg(bookmarkImg, 'bookmark')} Bookmark`;
  }
};

export { toggleNav, toggleBookamrkBtn, bookmarkBtn, hamburgerBtn };
