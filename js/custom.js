function scrollById(idToSrcollTo){
  $('header').toggleClass('nav-is-visible');
  $('.cd-main-nav').toggleClass('nav-is-visible');
  $('.cd-main-content').toggleClass('nav-is-visible');
  $('html,body').animate({
  scrollTop: $("#"+idToSrcollTo).offset().top},
  'slow');
}
window.onscroll = function() {myFunction()};
var x=90;
var scrollLimiter = 50;
function myFunction() {
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  previousPosition = currentPosition;
  document.getElementById('imagePosition').style.left=currentPosition+"px";
  document.getElementById('imagePosition').style.position="fixed";
  document.getElementById('imagePosition').style.bottom=2*currentPosition+"px";
  if (document.body.scrollTop > scrollLimiter || document.documentElement.scrollTop > scrollLimiter) {
    $("#mainDescp").fadeOut();
  } else {
    $("#mainDescp").show();
  }
}
