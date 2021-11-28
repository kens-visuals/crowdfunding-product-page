/* eslint-disable object-curly-newline */
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import { classesRemover, setSuccessState } from './helpers';

const modalBg = document.querySelector('.js-modal-bg');
const inputs = document.querySelectorAll('.js-input');
const modals = document.querySelectorAll('.js-modal');
const figures = document.querySelectorAll('.js-figure');
const errorTexts = document.querySelectorAll('.js-error');
const checkboxes = document.querySelectorAll('.js-checkbox');
const checkedBlocks = document.querySelectorAll('.js-checked');
const modalCloseBtns = document.querySelectorAll('.js-modal-close');
const [modalLarge, modalSmall] = modals;

const closeModal = function () {
  modalBg.classList.remove('is-modal-visible');
  modalLarge.classList.remove('is-none');
  modalLarge.classList.remove('is-modal-visible');
  modalSmall.classList.remove('is-modal-visible');
  document.body.classList.remove('is-overflow');

  inputs.forEach((input) => (input.value = ''));

  errorTexts.forEach((text) => setSuccessState(text));
};

const toggleModalBg = function () {
  classesRemover(figures, 'active-grid');
  classesRemover(checkedBlocks, 'is-checked');

  checkboxes.forEach((checkbox) => (checkbox.checked = false));

  modalBg.classList.add('is-modal-visible');
  modalLarge.classList.add('is-modal-visible');
  document.body.classList.add('is-overflow');
};

export {
  closeModal,
  toggleModalBg,
  modalCloseBtns,
  inputs,
  checkboxes,
  modals,
};
