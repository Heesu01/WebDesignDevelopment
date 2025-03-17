jQuery(document).ready(function () {
  // 메뉴 슬라이드
  $(".mainmenu>li")
    .mouseover(function () {
      $(this).children(".submenu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).children(".submenu").stop().slideUp(500);
    });

  // 이미지 페이드인아웃
  $(".imgslide img").hide();
  $(".imgslide img:first").show();
  setInterval(function () {
    $(".imgslide img:first-child")
      .fadeOut(1000)
      .next("img")
      .fadeIn(1000)
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // 모달팝업창
  $(".notice a:first").click(function () {
    $("#popup").addClass("active");
  });
  $(".btn").click(function () {
    $("#popup").removeClass("active");
  });
});
