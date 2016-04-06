/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 $.fn.extend({
     animateCss: function (animationName) {
         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         $(this).addClass('animated ' + animationName).one(animationEnd, function() {
             $(this).removeClass('animated ' + animationName);
         });
     }
 });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

var items = [{
  id: ".team-member",
  animation: "bounceIn",
  in: true
},{
  id: "#t1",
  animation: "slideInLeft",
  in: true
},{
  id: "#t2",
  animation: "slideInRight",
  in: true
},{
  id: "#t3",
  animation: "slideInLeft",
  in: true
},{
  id: "#t4",
  animation: "slideInRight",
  in: true
},{
  id: "#t5",
  animation: "rubberBand",
  constant: true
}];

var animationsForButton = [
  "bounce",
  "tada",
  "shake",
  "pulse"
];

function animateButton() {
  var r = Math.floor(Math.random() * animationsForButton.length);
  var animation = animationsForButton[r];
  $("#llamabutton").animateCss(animation);
}

function startAnimatingButton() {
  animateButton();
  setTimeout(function () {
    startAnimatingButton();
  },2500);
}

startAnimatingButton();

var itemsVisibles = {};

function animate(item) {
  var id = item.id;
  var animation = item.animation;
  var windowOffset = $(window).scrollTop();
  var elementOffset = $(id).offset().top;
  var elemetnHeight = $(id).height();
  var windowHeight = $(window).height();
  var value = windowOffset <= elementOffset && windowOffset + windowHeight >= elementOffset + elemetnHeight;
  if (item.in) {
    value = elementOffset - (windowOffset + windowHeight) <= 5;
  }
  if (value && !itemsVisibles[id]) {
    itemsVisibles[id] = true;
    $(id).animateCss(animation);
  } else if (item.constant) {
    itemsVisibles[id] = value;
  }
}

function doAnimations() {
  for (var i = 0; i < items.length; i++) {
    animate(items[i]);
  }
}

$(window).scroll(doAnimations);
