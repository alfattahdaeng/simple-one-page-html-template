$(document).ready(function() {
  var thing1 = $('.one-third'),
    thing2 = $('.two-third'),
    thing3 = $('.three-third'),
    row = $('.row'),
    pageHeight = $(window).height();
  $(thing1,thing2,thing3).addClass('offscreen');
  $(window).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    $.each(row, function() {
      var rowScroll = $(this).offset().top - pageHeight*.7;
    if( scrollDistance > rowScroll ) {
    $(this).children('.third').removeClass('offscreen');
    } else {
      $(this).children('.third').addClass('offscreen');
    };
  });
   });
 });
