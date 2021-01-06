// スワイパー
var swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 55,
  centeredSlides: true,
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    reverseDirection: false
  },
});


// トップへ
$(function(){
  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    },500);
  });
});

// ナビゲーション
$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop':position - 94
    },500);
  });

  $('.main-text a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;

      $('html, body').animate({
        'scrollTop':position - 94
      },500);
    });



// フォーム送信
$(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfyhr5CGpd1GWI1uP0lrjBuJWEFlpVsisPENuAR06FGfxUGwQ/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".submit-btn").fadeOut();
              //window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });
});
