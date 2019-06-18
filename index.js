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

$(document).ready(function() {
  $(".block-3").mouseover(function() {
    $(".bs").removeClass("btn-outline-primary");
    $(".bs").addClass("btn-primary animated infinite pulse");
  });
  $(".block-3").mouseout(function() {
    $(".bs").removeClass("btn-primary animated infinite pulse");
    $(".bs").addClass("btn-outline-primary");
  });
});

$(document).ready(function() {
  $(".block-4").mouseover(function() {
    $(".be").removeClass("btn-outline-primary");
    $(".be").addClass("btn-primary animated infinite pulse");
  });
  $(".block-4").mouseout(function() {
    $(".be").removeClass("btn-primary animated infinite pulse");
    $(".be").addClass("btn-outline-primary");
  });
});
