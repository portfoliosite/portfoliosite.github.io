$(function() {
  var myMenu = $('#my-menu');
  var hamburger = $('.hamburger');
  var carouselServices = $('.carousel-services');

  /* Menu in Header */
  myMenu.mmenu({
    extensions: [ 'theme-black', 'fx-menu-slide', 'fx-listitems-drop', 'pagedim-black' ],
    navbar: {
      title: '<img src="img/logo.png" alt="Site Moto">'
    },
    offCanvas: {
      position: 'right'
    }
  });

  /* Animate hamburger in menu */

  var api = myMenu.data('mmenu');
	api.bind('open:finish', function() {
    hamburger.addClass('is-active');
  });
	api.bind('close:finish', function () {
    hamburger.removeClass('is-active');
  });
	/* / Menu in Header */

  /* Carousel for section of Services */
	carouselServices.on('initialized.owl.carousel', function() {
    setTimeout(function () {
      carouselService();
    }, 100);
  });

  carouselServices.owlCarousel({
    loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });

	function carouselService() {
    $('.carousel-services-item').each(function(){
      var ths = $(this),
          thsh = ths.find('.carousel-services-content').outerHeight();
          ths.find('.carousel-services-image').css('min-height', thsh);
    });
  }carouselService();

	$('.carousel-services-composition .h3').each(function() {
	  var ths = $(this);
	  ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'))
  });

  $('section .h2').each(function() {
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'))
  });
  /* / Carousel for section of Services */


  /* Selectize for form of send mail section */
  $('select').selectize();

  /* Carousel for section of Reviews */
  $('.reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav: false,
    autoHeight: true
  });

  /* Carousel for section of Partners */
  $('.partners').owlCarousel({
    loop: true,
    smartSpeed: 700,
    dots: false,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  /* Animate button Top */
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
  });

  /* E-mail Ajax Send */
  $("form.callback").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });
  
  function onResize() {
    $('.carousel-services-content').equalHeights();
  }onResize();
	window.onResize = function () {onResize()}

});

/* Preloader */
$(window).on('load', function() {
  $('.preloader').delay(500).fadeOut('slow');
});