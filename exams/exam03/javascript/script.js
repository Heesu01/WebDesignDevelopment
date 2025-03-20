jQuery(document).ready(function () {
  //메뉴
  $("nav>ul>li")
    .mouseover(function () {
      $(".submenu").stop().slideDown(500);
      $(".sub-bgc").stop().slideDown(500);
    })
    .mouseout(function () {
      $(".submenu").stop().slideUp(500);
      $(".sub-bgc").stop().slideUp(500);
    });

  // 이미지 슬라이드
  $(".imgslide a").hide();
  $(".imgslide a:first").show();
  setInterval(function () {
    $(".imgslide a:first")
      .fadeOut(1000)
      .next("a")
      .fadeIn(1000)
      .end()
      .appendTo(".imgslide");
  }, 3000);

  // 모달
  $(".notice li:first").click(function () {
    $("#popup").addClass("active");
  });
  $(".btn").click(function () {
    $("#popup").removeClass("active");
  });
});
