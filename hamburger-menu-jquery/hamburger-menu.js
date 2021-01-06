$(function(){
  $('#js-hamburger').click(function(){

    //------ ↓必要か？12/23時点---------
    $('body').toggleClass('is-drawerActive')
    //---------------------------

    if($(this).attr('aria-expanded') == 'false'){
      $(this).attr('aria-expanded',true)
      $('.sp-global-menu').css('visibility','visible')
      $('.sp-global-menu').attr('area-hidden','false')
    }else {
      $(this).attr('aria-expanded',false)
      $('.sp-global-menu').css('visibility','hidden')
      $('.sp-global-menu').attr('area-hidden','true')
    };
  });

  $('#js-global-menu a').click(function(){
    $('#js-hamburger').attr('aria-expanded',false)
    $('.sp-global-menu').css('visibility','hidden')
    $('.sp-global-menu').attr('area-hidden','true')
  });
});
