// for main menu mobile
$(function () {
  $('.hidden-menu li a').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    var result = location.match(link);
    if(result && link.length > 0) {
      $(this).addClass('hidden-menu-active');
    }
  });
});

// for main menu desctop
$(function () {
  $('.main-menu .list-menu li a').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    var result = location.match(link);
    if(result && link.length > 0) {
      $(this).addClass('main-menu-active');
    }
  });
});

// for services-more page services item
$(function () {
  $('.services-section .services-list li a').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    var result = location.match(link);
    if(result && link.length > 0) {
      $(this).parents("li").addClass('services-item-active');
    }
  });
});


// for footer menu
$(function () {
  $('.footer-main-menu li a').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    var result = location.match(link);
    if(result && link.length > 0) {
      $(this).addClass('footer-menu-active');
    }
  });
});

// for services menu
$(function () {
  $('.footer-services-menu li a').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    var result = location.match(link);
    if(result && link.length > 0) {
      $(this).addClass('services-item-active');
    }
  });
});


// FOR SLIDER MORE 
$('.center').slick({
  autoplay: true,
  autoplaySpeed: 300000000,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '20px',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 640,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1
    }
  }
  ],
  nextArrow: '<img class="next-btn" src="images/more-next.png" alt="more prev">',
  prevArrow: '<img class="prev-btn" src="images/more-prev.png" alt="more next">',
});

$(document).ready(function(){
  $(function(){
    $('.quote-btn').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
        var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - ($("#quote-block").outerHeight(true)- 590); //#main-header - заменить на ваш элемент
        $('html,body').animate({scrollTop: targetOffset}, 1000);
        return false;
      }
    }
  });
  });
});

// TEXT SLIDER ON MAIN PAGE
$(document).ready(function() {
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 5000000,
    infinite: true,
    speed: 1000,
    centerPadding: '10px',
    nextArrow: '<div class="next-btn"></div>',
    prevArrow: '<div class="prev-btn"></div>'
  });
});

// FOR ANIMATION <AIN PAGE IMAGES
$(document).ready(function (){

  var img = $('.animate-img');
  var i = Math.floor(Math.random() * img.length);
  img.eq(i).show();

  var bg = $('.animate-img').eq(i);

   //  var bganim;
   //  setTimeout(function() {


   //     bganim = setInterval(function (){
   //      bg.animate({
   //          height: "120%",
   //      }, 7000 );

   //      bg.animate({
   //          height: "100%",
   //      }, 7000 );
   //  }, 1000);



   // }, 1000);

   //  setInterval(function() {
   //      window.onscroll = function() {
   //          bg.stop();
   //      }
   //  }, 2000);
 });



// light box
$(document).ready(function() {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  })
});

$(document).ready(function() {
  $('.ui.dropdown')
  .dropdown();
});

// FIND DROPDOVN AND ADD CLASS ANGLE DOWN IN SELECT CITY BLOCK
$(document).ready(function($) {
  $("#select-services").find(".icon").addClass('angle down');
});

// scroll to map section and hide header
var fixmeTop = $('#quote-block').offset().top;
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $('#sticky-header').css({
      'z-index' : '-100',
    });
  } else {
    $('#sticky-header').css({
      'z-index' : '999999'
    });
  }
});
