jQuery(document).ready(function () {
  // menu
  $("nav>ul>li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown(1000);
  });
  $("nav>ul>li").mouseout(function () {
    $(this).children(".submenu").stop().slideUp(1000);
  });

  // img-slide
  $(".img-slide a").hide();
  $(".img-slide a:first").show();

  setInterval(function () {
    $(".img-slide a:first")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".img-slide");
  }, 3000);

  // tab
  $(".tab-contents > div").hide();
  $(".notice").show();
  $(".tab-menu li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var idx = $(this).index();

    $(".tab-contents > div").hide();
    $(".tab-contents > div").eq(idx).show();
  });

  // modal
  $(".notice ul li a:first").click(function () {
    $(".modal").show();
  });
  $(".modal button").click(function () {
    $(".modal").hide();
  });
});
