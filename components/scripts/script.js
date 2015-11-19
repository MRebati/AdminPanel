$('#menu-icon').click(function(e){
  'use strict';
  e.preventDefault();
  var container = $('container');
  $('aside').toggleClass('collapse',350);
  $('aside > .details').fadeToggle();
  $('.container').toggleClass('full-width',350);
});

$(window).scroll(function () {
  'use strict';
  if ($(this).scrollTop() > 167) {
    $('.nav').first().css('position','fixed');
    $('.nav').first().css('top','0');
    $('.nav').first().css('width','100%');
    /*$('.nav').first().css('background','rgba(0,0,0,0.3), url("../../../Content/images/header.jpg") repeat fixed 0 10% / cover ');
    $('.main-header').css('height','40px').css('position','fixed');*/
  }else{
    $('.nav').first().removeAttr('style');
    /*$('.main-header').removeAttr('style');*/
  }
});