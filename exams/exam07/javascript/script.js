jQuery(document).ready(function () {
  // 메뉴
  $("nav ul li").mouseover(function () {
    $(this).find(".submenu").stop().slideDown();
  });
  $("nav ul li").mouseout(function () {
    $(this).find(".submenu").stop().slideUp();
  });

  // 이미지슬라이드
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

  //탭메뉴
  $(".tab-contents .notice").show();
  $(".tab-contents .gallery").hide();
  $(".tab-menu li").click(function () {
    var idx = $(this).index();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".tab-contents > div").hide();
    $(".tab-contents > div").eq(idx).show();
  });

  // 모달
  $(".notice li:first").click(function () {
    $(".modal").show();
  });
  $(".btn").click(function () {
    $(".modal").hide();
  });
});
