jQuery(document).ready(function () {
  // 메뉴
  $("nav>ul>li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown(500);
  });
  $("nav>ul>li").mouseout(function () {
    $(this).children(".submenu").stop().slideUp(500);
  });

  // 이미지 슬라이드
  setInterval(function () {
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -800 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -1600 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: 0 });
    $(".slidelist").delay(2000);
  });

  //모달
  $(".notice li:first").click(function () {
    $(".popup").fadeIn(0.5);
  });
  $(".btn").click(function () {
    $(".popup").fadeOut(0.5);
  });
});
