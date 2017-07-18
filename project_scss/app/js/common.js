$(function() {
  var $navHeader = $('.nav-header');
  
  $('#button').click(function(ev) {
    ev.preventDefault();
    $navHeader.css({
      'top': '0',
      'left': '0'
    }).addClass('active-nav');
  });

  $('.fa-times, .b-menu').click(function() {
    $navHeader.css({
      'top': '0',
      'left': '-480px'
    }).removeClass('active-nav');
  });

});