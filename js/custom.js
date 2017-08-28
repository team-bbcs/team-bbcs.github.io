function scrollById(idToSrcollTo){
  $('header').toggleClass('nav-is-visible');
  $('.cd-main-nav').toggleClass('nav-is-visible');
  $('.cd-main-content').toggleClass('nav-is-visible');
  $('html,body').animate({
  scrollTop: $("#"+idToSrcollTo).offset().top},
  'slow');
}
window.onscroll = function() {myFunction()};
function myFunction() {
  var scrollLimiter = 50;
  if (document.body.scrollTop > scrollLimiter || document.documentElement.scrollTop > scrollLimiter) {
    $("#mainDescp").fadeOut();
  } else {
    $("#mainDescp").show();
  }
}
