$(function() {
  
  $(".carousel-body").owlCarousel({
    items: 1,
    nav: true,
    loop:true,
    dots: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
  });

  $('.carousel-item').on('click', function() {
    $('.carousel-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.owl-next, .owl-prev').on('click', function() {
    $('.carousel-item').removeClass('active');
  });

  $("#ex19").slider({
    step: 1000,
    min: 0,
    max: 9000,
    value: 1000
  });

});