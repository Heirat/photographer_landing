new WOW().init();
const headerOuterElem = document.querySelector('.header-outer');
const menuToggleElem = document.querySelector('#menu__toggle');
const headerLogoElem = document.querySelector('.logo');
const hamburgerMenuElem = document.querySelector('.hamburger-menu');
const overlayElem = document.querySelector('.overlay');

const noScrollState = () => {
  // Шапка не прокручена
  headerOuterElem.classList.remove('scrolled');
  // Закрыть список меню
  menuToggleElem.checked = false;
  // Скрыть бургер-кнопку
  hamburgerMenuElem.classList.add('d-none');
  // Состояние шапки при закрытом меню
  headerOuterElem.classList.remove('menu-opened');
  // Показать лого
  headerLogoElem.classList.remove('invisible');
  // Скрыть наложение
  overlayElem.classList.add('invisible');
};

const scrollState = () => {
  // Шапка прокручена
  headerOuterElem.classList.add('scrolled');
  // Показать бургер-кнопку
  hamburgerMenuElem.classList.remove('d-none');
}
window.onscroll = function () {
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

menuToggleElem.addEventListener('click', toggleMenu)

$(document).ready(function(){
  $(".faq-question").on("click", function() {
    $(this).parent().toggleClass('opened');    
  });
});