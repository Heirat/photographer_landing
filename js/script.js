new WOW().init(); 

window.onscroll = function() { 
  let scrollPos = window.pageYOffset;  
  if (scrollPos >= 120) {    
    document.getElementsByClassName('header-outer')[0].classList.add('scrolled')
  }  
  else {
    document.getElementsByClassName('header-outer')[0].classList.remove('scrolled')
  }
};

$(function() {
  var $speed = 200; 

  var $li_opened = 'opened';
  var $answer_class = '.faq-answer';
  
  $(document).ready(function() { 
     $('.faq-question').on('click', function() {
       $ul = $(this).closest('ul');
       $answer = $(this).closest('li').find($answer_class);
       
       if( !$(this).closest('li').hasClass($li_opened) ) {
       
         $ul.find('li').each(function() {
           if( $(this).hasClass($li_opened) )
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


