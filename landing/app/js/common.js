$(function() {

  $('.parallax-window').parallax();

  $('.toggle-menu').click(function() {
	  $('.sandwich').toggleClass('active');
	});

	$('.toggle-menu').click(function() {
		if ($('.top-menu').is(':visible')) {
			$('.top-menu').fadeOut(600);
			$('.top-menu ul li a').toggleClass('fadeInUp animated');
			$('.top-text h1').toggleClass('h-opacity');
		} else {
			$('.top-menu').fadeIn(600);
			$('.top-menu ul li a').addClass('fadeInUp animated');
			$('.top-text h1').addClass('h-opacity');
		}
		
	});

	$('.top-menu ul li a').click(function() {
		$('.top-menu').fadeOut();
		$('.sandwich').toggleClass('active');
		$('.top-text h1').toggleClass('h-opacity');
	});
	
	$('.top-text h1').animated('fadeInDown', 'fadeOutUp');
	$('.top-text p').animated('fadeInUp', 'fadeOutDown');

	$('.section-header, .animation-1,  .animation-2, .animation-3, .sli1, .sli2, .sli3, .sri1, .sri2, .sri3').css('opacity', 0).addClass('animated');

	$('.sh1').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sh1').removeClass('fadeOutDown').addClass('fadeInUp');
    } else {
    	$('.sh1').removeClass('fadeInUp').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sh2').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sh2').removeClass('fadeOutDown').addClass('fadeInUp');
    } else {
    	$('.sh2').removeClass('fadeInUp').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sh3').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sh3').removeClass('fadeOutDown').addClass('fadeInUp');
    } else {
    	$('.sh3').removeClass('fadeInUp').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sh4').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sh4').removeClass('fadeOutDown').addClass('fadeInUp');
    } else {
    	$('.sh4').removeClass('fadeInUp').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.animation-1').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.animation-1').removeClass('flipOutY').addClass('flipInY').css('opacity', 1);
    } else {
    	$('.animation-1').removeClass('flipInY').addClass('flipOutY').css('opacity', 1);
    }
  }, { offset: '80%'});

  $('.animation-2').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.animation-2').removeClass('fadeOutLeft').addClass('fadeInLeft');
    } else {
    	$('.animation-2').removeClass('fadeInLeft').addClass('fadeOutLeft');
    }
  }, { offset: '80%'});

  $('.animation-3').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.animation-3').removeClass('fadeOutRight').addClass('fadeInRight');
    } else {
    	$('.animation-3').removeClass('fadeInRight').addClass('fadeOutRight');
    }
  }, { offset: '80%'});

  $('.sli1').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sli1').removeClass('fadeOutDown').addClass('fadeInLeft');
    } else {
    	$('.sli1').removeClass('fadeInLeft').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sli2').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sli2').removeClass('fadeOutDown').addClass('fadeInLeft');
    } else {
    	$('.sli2').removeClass('fadeInLeft').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sli3').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sli3').removeClass('fadeOutDown').addClass('fadeInLeft');
    } else {
    	$('.sli3').removeClass('fadeInLeft').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

    $('.sri1').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sri1').removeClass('fadeOutDown').addClass('fadeInRight');
    } else {
    	$('.sri1').removeClass('fadeInRight').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sri2').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sri2').removeClass('fadeOutDown').addClass('fadeInRight');
    } else {
    	$('.sri2').removeClass('fadeInRight').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('.sri3').waypoint(function(dir) {
    if (dir === 'down') {
    	$('.sri3').removeClass('fadeOutDown').addClass('fadeInRight');
    } else {
    	$('.sri3').removeClass('fadeInRight').addClass('fadeOutDown');
    }
  }, { offset: '80%'});

  $('#portfolio_grid').mixItUp();

  $('.portfolio-list li').click(function() {
  	$('.portfolio-list li').removeClass('active');
  	$(this).addClass('active');
  });

  $('.popup-content').magnificPopup({
  	type:'inline',
  	midClick: true
  });

  $('.portfolio-item').each(function(i) {
  	$(this).find('a').attr('href', '#work_' + i);
  	$(this).find('.port-descr').attr('id', 'work_' + i);
  });

  $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

  $(".top-menu ul a").mPageScroll2id();

});

$(window).on('load', function() {
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');

	/*$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");*/
});