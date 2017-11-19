$(document).ready(function() {

  var hint = 0;
  var level = 1;

  $("div.play-game").click(function() {
    $("div.video-wrapper").fadeOut(3000);
    $("div#Q1").show();
    $("div.game-wrapper").delay(3000).slideDown(3000);

  });

});
