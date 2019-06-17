$(document).ready(function() {
  $(".block-2").mouseover(function() {
    $(".ba").removeClass("btn-outline-primary");
    $(".ba").addClass("btn-primary animated infinite pulse");
  });
  $(".block-2").mouseout(function() {
    $(".ba").removeClass("btn-primary animated infinite pulse");
    $(".ba").addClass("btn-outline-primary");
  });
});
