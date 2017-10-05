jQuery(document).ready(function($){
//move butterfly
var container = document.getElementById('container1');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var square1 = document.getElementsByClassName('bee')[0];


// update position of square 1 and square 2 when scroll event fires.
window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  
  square1.style.left = scrollPercent*window.innerWidth + 'px';
  
});


	//parallax
$('.parallax').parallax();
  //cache some jQuery objects
  

	var modalTrigger = $('.cd-modal-trigger'),
		transitionLayer = $('.cd-transition-layer'),
		transitionBackground = transitionLayer.children(),
		modalWindow = $('.cd-modal');
    var link = document.getElementById("front_page_button");
    document.onkeydown = function (e) {
      if (e.keyCode == 32) {
          link.click();
      }
  };

	var frameProportion = 1.78, //png frame aspect ratio
		frames = 25, //number of png frames
		resize = false;

	//set transitionBackground dimentions
	setLayerDimensions();
	$(window).on('resize', function(){
		if( !resize ) {
			resize = true;
			(!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
		}
	});

	//open modal window
  modalTrigger.on('click', function(event){
    var url = event.target.href || event.srcElement.href;
    event.preventDefault();
    transitionLayer.addClass('visible opening');
    var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
    setTimeout(function(){
      window.open(url, "_self");
    }, delay);
});

	//close modal window
	modalWindow.on('click', '.modal-close', function(event){
		event.preventDefault();
		transitionLayer.addClass('closing');
		modalWindow.removeClass('visible');
		transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
			transitionLayer.removeClass('closing opening visible');
			transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
		});
	});

	function setLayerDimensions() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			layerHeight, layerWidth;

		if( windowWidth/windowHeight > frameProportion ) {
			layerWidth = windowWidth;
			layerHeight = layerWidth/frameProportion;
		} else {
			layerHeight = windowHeight*1.2;
			layerWidth = layerHeight*frameProportion;
		}

		transitionBackground.css({
			'width': layerWidth*frames+'px',
			'height': layerHeight+'px',
		});

		resize = false;
	}

    //move nav element position according to window width
    moveNavigation();
    $(window).on('resize', function(){
      (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
    });

    //mobile version - open/close navigation
    $('.cd-nav-trigger').on('click', function(event){
      event.preventDefault();
      if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');

      $('header').toggleClass('nav-is-visible');
      $('.cd-main-nav').toggleClass('nav-is-visible');
      $('.cd-main-content').toggleClass('nav-is-visible');
    });

    //mobile version - go back to main navigation
    $('.go-back').on('click', function(event){
      event.preventDefault();
      $('.cd-main-nav').removeClass('moves-out');
    });

    //open sub-navigation
    $('.cd-subnav-trigger').on('click', function(event){
      event.preventDefault();
      $('.cd-main-nav').toggleClass('moves-out');
    });

    function moveNavigation(){
      var navigation = $('.cd-main-nav-wrapper');
        var screenSize = checkWindowWidth();
          if ( screenSize ) {
            //desktop screen - insert navigation inside header element
        navigation.detach();
        navigation.insertBefore('.cd-nav-trigger');
      } else {
        //mobile screen - insert navigation after .cd-main-content element
        navigation.detach();
        navigation.insertAfter('.cd-main-content');
      }
    }

    function checkWindowWidth() {
      var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '').replace(/'/g, "");
      return ( mq == 'mobile' ) ? false : true;
    }
});
