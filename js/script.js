



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
