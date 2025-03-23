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
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: -400 });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: -800 });
    $(".slide-list").delay(2000);
    $(".slide-list").animate({ marginTop: 0 });
    $(".slide-list").delay(2000);
  });

  // 탭메뉴
  $(".notice");
  $(".gallery").hide();

  $(".tab-menu > li ").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    var idx = $(this).index();

    $(".tab-contents>div").hide();
    $(".tab-contents>div").eq(idx).show();
  });

  // 모달
  $(".notice ul li:first").click(function () {
    $(".modal").show();
  });
  $(".modal button").click(function () {
    $(".modal").hide();
  });
});
