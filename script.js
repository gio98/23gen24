$(document).ready(function () {
  $(".title").click(function () {
    $(".container").addClass("open");
    $('body').css('background-color', 'red');
  });

  $(".close").click(function () {
    $(".container").removeClass("open");
  });
});