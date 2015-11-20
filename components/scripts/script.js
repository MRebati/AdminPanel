$('#menu-icon').click(function(e){
  'use strict';
  e.preventDefault();
  $('aside').toggleClass('collapse',350);
});

$('#collapsed-icon').click(function(){
  'use strict';
  var width = $(window).width();
  $('aside').toggleClass('showsidebar',350);
  //TweenLite.to('aside', .7, { x: 500, ease: Power3.easeOut});
  //$("aside").animate({width:'toggle'},350);
});

$(document).ready(function(){
  'use strict';
  var width = $(window).width();
  if(width < 400){
    $('aside').removeClass('collapse').hide();
    $('.container').addClass('full');
  }else{
    $('aside').removeClass('showsidebar').show();
    $('.container').removeClass('full');
  }

  if(width> 400 && width < 960){
    'use strict';
    $('aside').addClass('collapse');
  }
});

$(window).resize(function(){
  'use strict';
  var width = $(window).width();
  if(width < 400){
    $('aside').removeClass('collapse').hide();
  }else{
    $('aside').removeClass('showsidebar').show();
  }
  if(width> 400 && width < 960){
    'use strict';
    $('aside').addClass('collapse');
  }
});

/*function collabrate(){
  'use strict';
  var width = $(window).width();
  var aside = $('aside');
  var asidewidth = aside.width();
  $('.container').width(width - asidewidth);
  var containerwidth = $('.container').width();
  //$('.container').css('width',containerwidth+17);
}*/

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