$(document).ready(function() {

  var favorites = ",";
  var random;

  function seeFav() {
    if (favorites === ",") {
      $("div.favoriteswrapper").hide()
    }  else {
      $("div.favoriteswrapper").show()
    }
  };

  function favoriteButton() {
    if (favorites.indexOf(","+random) > -1)
      {
        $("div#favorited").show(),
        $("div#favoritebutton").hide();
      }
      else {
        $("div#favoritebutton").show(),
        $("div#favorited").hide();
      }
    };

  seeFav();

  $("div#randombutton").click(function() {
    random = Math.floor((Math.random() * 5) + 1);

    var randomText = $("#Q" + random).text();

    $("div#randomquote").show();

    $("div#randomquote").html(randomText);

    favoriteButton();
    seeFav();

  });

  $("div#favoritebutton").click(function() {
    favorites = favorites + random + ",";
    alert(favorites);
    favoriteButton();
    seeFav();
  });


});
