jQuery(document).ready(function () {
  //이미지 슬라이드
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

  // 메뉴
  $("nav>ul>li").mouseover(function () {
    $(this).children(".submenu").stop().slideDown(500);
  });
  $("nav > ul > li").mouseout(function () {
    $(this).children(".submenu").stop().slideUp(500);
  });

  // 모달
  $(".notice a:first").click(function () {
    $(".popup").show();
  });
  $(".btn").click(function () {
    $(".popup").hide();
  });
});
