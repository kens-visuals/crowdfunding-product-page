const nav = document.querySelector('.js-nav');
const bookmarkBtn = document.querySelector('.js-bookmark');
const hamburgerBtn = document.querySelector('.js-hamburger');
const hamburgerIcon = document.querySelector('.js-hamburger-icon');

const toggleNav = function () {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerIcon.src = '../images/icon-close-menu.svg';
  } else {
    nav.classList.remove('open-nav');
    hamburgerIcon.src = '../images/icon-hamburger.svg';
  }
};

bookmarkBtn.addEventListener('click', () => {
  if (!bookmarkBtn.classList.contains('bookmarked')) {
    bookmarkBtn.classList.add('bookmarked');
    bookmarkBtn.innerHTML = `<img src="./images/icon-bookmark.svg"
    alt="" aria-hidden="true" class="crowdfund__bookmark" /> Bookmarked`;
  } else {
    bookmarkBtn.classList.remove('bookmarked');
    bookmarkBtn.innerHTML = `<img src="./images/icon-bookmark.svg"
    alt="" aria-hidden="true" class="crowdfund__bookmark" /> Bookmark`;
  }
});

hamburgerBtn.addEventListener('click', toggleNav);
