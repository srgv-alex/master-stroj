// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Модальное окно

const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector("[data-action='modal']");
const closeModalBtn = document.querySelector('#closeModal');
const modalBody = document.querySelector('.modal__body');

openModalBtn.addEventListener('click', function() {
	modal.classList.add('modal--open');
	document.body.classList.add('no-scroll');
});

closeModalBtn.addEventListener('click', function() {
	modal.classList.remove('modal--open');
	document.body.classList.remove('no-scroll');
});
