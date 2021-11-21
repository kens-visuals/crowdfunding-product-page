const nav = document.querySelector('.js-nav');
const hamburgerBtn = document.querySelector('.js-hamburger');
const hamburgerIcon = document.querySelector('.js-hamburger-icon');

hamburgerBtn.addEventListener('click', () => {
  if (!nav.classList.contains('open-nav')) {
    nav.classList.add('open-nav');
    hamburgerIcon.src = '../images/icon-close-menu.svg';
  } else {
    nav.classList.remove('open-nav');
    hamburgerIcon.src = '../images/icon-hamburger.svg';
  }
});
