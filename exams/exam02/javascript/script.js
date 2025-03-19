jQuery(document).ready(function () {
  // 서브메뉴
  $("nav>ul>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
    });

  // 이미지 슬라이드
  setInterval(function () {
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -1200 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: -2400 });
    $(".slidelist").delay(2000);
    $(".slidelist").animate({ marginLeft: 0 });
    $(".slidelist").delay(2000);
  });

  // 탭메뉴
  $(".tabContents > .notice").show();
  $(".tabContents > .gallery").hide();

  $(".tabMenu a").click(function (e) {
    e.preventDefault();
    var idx = $(this).index();

    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    $(".tabContents > div")
      .eq(idx)
      .addClass("active")
      .show()
      .siblings()
      .removeClass("active")
      .hide();
  });

  // 레이어팝업창
  $(".notice li:first").click(function () {
    $("#layer").addClass("active");
  });
  $(".btn").click(function () {
    $("#layer").removeClass("active");
  });
});
