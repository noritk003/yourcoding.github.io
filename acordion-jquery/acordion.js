$(function(){
  $('.jsAccordionTitle').click(function(){
    $(this).next().toggleClass('is-open')
    $(this).toggleClass('is-active')
  });
});
