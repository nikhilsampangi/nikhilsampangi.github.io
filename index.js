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

$(document).ready(function() {
  $(".block-5").mouseover(function() {
    $(".bp").removeClass("btn-outline-primary");
    $(".bp").addClass("btn-primary animated infinite pulse");
  });
  $(".block-5").mouseout(function() {
    $(".bp").removeClass("btn-primary animated infinite pulse");
    $(".bp").addClass("btn-outline-primary");
  });
});

$(document).ready(function() {
  $(".block-6").mouseover(function() {
    $(".bc").removeClass("btn-outline-primary");
    $(".bc").addClass("btn-primary animated infinite pulse");
  });
  $(".block-6").mouseout(function() {
    $(".bc").removeClass("btn-primary animated infinite pulse");
    $(".bc").addClass("btn-outline-primary");
  });
});

$(document).ready(function() {
  $(".block-7").mouseover(function() {
    $(".bd").removeClass("btn-outline-primary");
    $(".bd").addClass("btn-primary animated infinite pulse");
  });
  $(".block-7").mouseout(function() {
    $(".bd").removeClass("btn-primary animated infinite pulse");
    $(".bd").addClass("btn-outline-primary");
  });
});

// Auto Collapse navbar on select in small screens

$(".nav-link").on("click", function() {
  if (screen.width <= 768) {
    $(".navbar-toggler").click(); //bootstrap 4.x
  }
});
