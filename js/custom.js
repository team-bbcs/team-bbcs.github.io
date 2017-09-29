var sections={
  0:'home',
  1:'about_us',
  2:'projects',
  3:'contact_us'
};
var s={
  0:  $('#home').offset().top,
  1:  $('#about_us').offset().top,
  2:  $('#projects').offset().top,
  3:  $('#contact_us').offset().top
};
function scrollTo(idToSrcollTo){
  $('html,body').animate({
  scrollTop: $("#"+idToSrcollTo).offset().top},
  'slow');
}
function scrollById(idToSrcollTo){
  $('header').toggleClass('nav-is-visible');
  $('.cd-main-nav').toggleClass('nav-is-visible');
  $('.cd-main-content').toggleClass('nav-is-visible');
  underlineChange(idToSrcollTo);
  scrollTo(idToSrcollTo);
}
window.onscroll = function() {myFunction()};
var x=90;
var scrollLimiter = 50;
function myFunction() {
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  underlineControl(currentPosition);
  if(currentPosition<50){
    changePlanePosition(currentPosition);
  }
}

function underlineChange(id){
  for(var i=0 ; i<4 ; i++){
    $("#"+"navbar_control"+"_"+sections[i]).css('text-decoration','none');
  }
  $("#"+"navbar_control"+"_"+id).css('text-decoration','underline');
}
function underlineControl(currentPosition){
  for(var i=0 ; i<4 ; i++){
    if(currentPosition>=s[i]-20){
      underlineChange(sections[i]);
    }
  }
}
function changePlanePosition(currentPosition){
  document.getElementById('imagePosition').style.left=currentPosition+"px";
  document.getElementById('imagePosition').style.position="fixed";
  document.getElementById('imagePosition').style.bottom=2*currentPosition+"px";
}
function sendDataToSheets(){
  var script_url = "https://script.google.com/macros/s/AKfycbxiZTWRv5Uz9o5kW1cgY1XiErupC10o1iWh9oTcyAY/exec";
  var name = document.getElementById('name').value;
  var email =	document.getElementById('email').value;
  var comments = document.getElementById('comments').value;
   var url = script_url+"?callback=ctrlq&name="+name+"&email="+email+"&comments="+comments;
   $.ajax({
     crossDomain: true,
     url: url ,
     method: "GET",
     dataType: "jsonp"
   });
    document.getElementById('before_submitting').style.display="none";
    document.getElementById('after_submitting').style.display="block";
}
