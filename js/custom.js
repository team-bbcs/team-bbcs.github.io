function scrollById(idToSrcollTo){
  $('header').toggleClass('nav-is-visible');
  $('.cd-main-nav').toggleClass('nav-is-visible');
  $('.cd-main-content').toggleClass('nav-is-visible');
  $('html,body').animate({
  scrollTop: $("#"+idToSrcollTo).offset().top},
  'slow');
}
