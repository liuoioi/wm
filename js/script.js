

// 滾動menu 改變
$(document).ready(function() {
    $window = $(window);
    $(window).scroll(function() {

        if ($window.scrollTop() > 100) //當卷軸大於100px時
            $("header.index , header.page").addClass("active"); //在ID menufix 增加class
        else
            $("header.index , header.page").removeClass("active"); //小於100px時 移除 class

    });

});

// back-top-js
$(document).ready(function() {
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 120) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});


$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


$(function () {
  // initialize skrollr if the window width is large enough
  if ($(window).width() > 1025) {
    skrollr.init("#bg1");
	  new WOW().init();
  }

  // disable skrollr if the window is resized below 768px wide
  $(window).on('resize', function () {
    if ($(window).width() <= 1025) {
      skrollr.init().destroy(); // skrollr.init() returns the singleton created above
		WOW().init().destroy();
    }
  });
});
