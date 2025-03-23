jQuery(document).ready(function () {
  // 메뉴
  $(".submenu").hide();
  $("nav > ul ").mouseover(function () {
    $(".submenu").stop().slideDown(500);
  });
  $("nav > ul ").mouseout(function () {
    $(".submenu").stop().slideUp(500);
  });

  //이미지 슬라이드
  setInterval(function () {
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: -400 });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: -800 });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: 0 });
    $(".slide-list").delay(2000);
  });

  // 모달
  $(".notice ul li:first").click(function () {
    $(".modal").fadeIn(100);
  });
  $(".modal button").click(function () {
    $(".modal").fadeOut(100);
  });
});
