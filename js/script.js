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

$(function () {
  var $speed = 200;

  var $li_opened = 'opened';
  var $answer_class = '.faq-answer';

  $(document).ready(function () {
    $('.faq-question').on('click', function () {
      $ul = $(this).closest('ul');
      $answer = $(this).closest('li').find($answer_class);

      if (!$(this).closest('li').hasClass($li_opened)) {

        $ul.find('li').each(function () {
          if ($(this).hasClass($li_opened))
            $(this).removeClass($li_opened).find($answer_class).slideUp($speed);
        });
      }

      $answer
        .slideToggle($speed)
        .closest('li')
        .toggleClass($li_opened);
    });
  });
});