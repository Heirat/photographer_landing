$(function () {
  let $speed = 200;

  let $li_opened = 'opened';
  let $answer_class = '.faq-answer';

  $(document).ready(function () {
    $('.faq-question').on('click', function () {

      $ul = $(this).closest('ul'); // faq-questions
      $answer = $(this).closest('li').find($answer_class); // faq-answer нажатого вопроса

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

const openMenu = () => {
  headerOuterElem.classList.add('menu-opened');
  headerLogoElem.classList.add('invisible');
  overlayElem.classList.remove('invisible');
  // Закрыть список меню
  menuToggleElem.checked = true;
}