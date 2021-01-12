$(document).ready(function () {
  "use strict";

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);



  // ------------------------------------------------------------------------------ //
  // Preloader Javascript 
  // ------------------------------------------------------------------------------ //


  jQuery('#status').fadeOut();
  jQuery('#preloader').delay(550).fadeOut('slow');
  jQuery('body').delay(550).css({
    'overflow': 'visible'
  });



  // ------------------------------------------------------------------------------ //
  // Counterup   
  // ------------------------------------------------------------------------------ //  


  jQuery(document).ready(function ($) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  });





  // debounce so filtering doesn't happen every millisecond
  function debounce(fn, threshold) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout(timeout);
      var args = arguments;
      var _this = this;

      function delayed() {
        fn.apply(_this, args);
      }
      timeout = setTimeout(delayed, threshold);
    };
  }


  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

});


$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


$(function () {
  /* 按下GoTop按鈕時的事件 */
  $('.top.item').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 'slow'); /* 返回到最頂上 */
    return false;
  });

  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('#gotop').fadeIn();
    } else {
      $('#gotop').fadeOut();
    }
  });
});


$(function () {


  //控制top出現
  function setScroll() {
    var win = $(window);
    var scrollTop = win.scrollTop();
    var winHeight = win.height();
    var bodyHeight = $(document).height();

    if (scrollTop > winHeight * 0.3) {
      $(".header").addClass("show");
      $(".scrolltop").addClass("show");
    } else {
      $(".header").removeClass("show");
      $(".scrolltop").removeClass("show");
    }

  }

  //scrolldown
  $(".scrolldown").click(function () {
    var contT = $(".sstop").height();
    $("body,html").animate({
      scrollTop: 500
    }, 1000);
  });


  //scrolltop
  $(".scrolltop").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 500);
  });



  //----
  $(window).scroll(function () {
    setScroll();
  })

})

$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");

  $(".navbar-nav").clone().prependTo("#off-canvas");

  $(function() {
    $(document).trigger("enhance");
  });

  // document ready  
});