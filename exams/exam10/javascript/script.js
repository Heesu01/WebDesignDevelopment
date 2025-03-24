jQuery(document).ready(function () {
  // menu
  $("nav>ul>li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown(500);
  });
  $("nav ul li").mouseout(function () {
    $(this).children(".submenu").stop().slideUp(500);
  });

  // img-slide
  setInterval(function () {
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginLeft: "-100%" });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginLeft: "-200%" });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginLeft: 0 });
    $(".slide-list").delay(2000);
  });

  // modal
  $(".notice ul li:first").click(function () {
    $(".popup").show();
  });
  $(".modal button").click(function () {
    $(".popup").hide();
  });
});
