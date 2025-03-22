jQuery(document).ready(function () {
  // 메뉴
  $("nav>ul>li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown(500);
  });
  $("nav>ul>li").mouseout(function () {
    $(this).children(".submenu").stop().slideUp(500);
  });
  // 이미지슬라이드
  setInterval(function () {
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -300 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: -600 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginTop: 0 });
    $(".slidelist").delay(2000);
  });

  //탭메뉴
  $(".tabcontents > .notice").show();
  $(".tabcontents > .gallery").hide();

  $(".tabmenu li").click(function () {
    var idx = $(this).index();

    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    $(".tabcontents > div").hide();
    $(".tabcontents > div").eq(idx).show();
  });

  //모달
  $(".notice li:first").click(function () {
    $(".modal").fadeIn(0.5);
  });
  $(".btn").click(function () {
    $(".modal").fadeOut(0.5);
  });
});
