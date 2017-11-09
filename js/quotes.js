$(document).ready(function() {

  // seefav();
  //
  var favorites = ",";
  var random;

  $("div#randombutton").click(function() {
    random = Math.floor((Math.random() * 5) + 1);

    var randomText = $("#Q" + random).text();

    $("div#randomquote").show();

    $("div#randomquote").html(randomText);
  });

  $("div#favoritebutton").click(function() {
    favorites = favorites + random + ",";
    alert (favorites);

    // seefav();

  });

  // function seefav() {
  //   if (favorites !== undefined) {
  //     $("div.favoriteswrapper").show()
  //   } else if  (favorites = ",") {
  //     $("div.favoriteswrapper").show()
  //   }  else {
  //     $("div.favoriteswrapper").hide()
  //   }
  // };

});
