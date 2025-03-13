// $(document).ready(function () {
//   // 클릭하면 p요소 숨김
//   $("p").click(function () {
//     $(this).hide();
//   });
// });

// // div 요소 페이드인
// $("button").click(function () {
//   $("#div").fadeIn("slow");
// });

// // 버튼 클릭시 p 요소 내용 슬라이드 업
// $(".btn").click(function () {
//   $("p").slideUp(1000);
// });

$(document).ready(function () {
  // 클릭하면 p요소 숨김
  $("p").click(function () {
    $(this).hide();
  });

  // div 요소 페이드인
  $("button").click(function () {
    $("#div").fadeIn("slow");
  });

  // 버튼 클릭시 p 요소 내용 슬라이드 업
  $(".btn").click(function () {
    $("p").slideUp(1000);
  });
});
