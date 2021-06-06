new WOW().init();
const headerOuterElem = document.querySelector('.header-outer');
const menuToggleElem = document.querySelector('#menu__toggle');
const headerLogoElem = document.querySelector('.logo');
const menuElem = document.querySelector('.menu');
const overlayElem = document.querySelector('.overlay');
const menuBoxElem = document.querySelector('.menu__box')

const noScrollState = () => {
  // Шапка не прокручена
  headerOuterElem.classList.remove('scrolled');
  // Скрыть бургер-кнопку
  menuElem.classList.add('d-none');
  closeMenu();
};

const scrollState = () => {
  // Шапка прокручена
  headerOuterElem.classList.add('scrolled');
  // Показать бургер-кнопку
  menuElem.classList.remove('d-none');
};

window.onscroll = () => {
  let scrollPos = window.pageYOffset;
  if (scrollPos < 100) {
    noScrollState();
  } else {
    scrollState();
  }
};

const toggleMenu = () => {
  // Переключить состояние шапки на откртое меню
  headerOuterElem.classList.toggle('menu-opened');
  // Переключить лого
  headerLogoElem.classList.toggle('invisible');
  // Переключить наложение
  overlayElem.classList.toggle('invisible');
};

const closeMenu = () => {
  headerOuterElem.classList.remove('menu-opened');
  headerLogoElem.classList.remove('invisible');
  overlayElem.classList.add('invisible');
  // Закрыть список меню
  menuToggleElem.checked = false;
}

menuToggleElem.addEventListener('click', toggleMenu)
menuBoxElem.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('overlay') ||
    target.classList.contains('menu__item')) {
    closeMenu();
  }
})

$(document).ready(function () {
  $(".faq-question").on("click", function () {
    $(this).parent().toggleClass('opened');
  });
});