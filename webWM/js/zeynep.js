// zeynepjs initialization for demo
$(function() {
  // init zeynepjs
  var zeynep = $('.zeynep').zeynep({
    onClosed: function () {
      // enable main wrapper element clicks on any its children element
      $("body main").attr("style", "");

      console.log('the side menu is closed.');
    },
    onOpened: function () {
      // disable main wrapper element clicks on any its children element
      $("body main").attr("style", "pointer-events: none;");

      console.log('the side menu is opened.');
    }
  });

  // handle zeynep overlay click
  $(".zeynep-overlay").click(function () {
    zeynep.close();
  });

  // open side menu if the button is clicked
  $(".dope-navbar-toggler").click(function () {
    if ($("html").hasClass("zeynep-opened")) {
      zeynep.close();
    } else {
      zeynep.open();
    }
  });
});