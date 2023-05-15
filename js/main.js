$(document).ready(function () {
  // 헤더 네비게이션

  $(".sub").hide();
  $("#header_in .nav")
    .eq(0)
    .hover(
      function () {
        $(this).find(".sub").stop().slideDown(700);
      },
      function () {
        $(this).find(".sub").stop().slideUp(700);
      }
    );


  //  포스터 효과
  $('#showing li a').mouseover(function () {
    $(this).css('opacity', '0.4');
  })

  $('#showing li a').mouseout(function () {
    $(this).css('opacity', '1');
  })
});