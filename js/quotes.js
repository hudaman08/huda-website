$(document).ready(function() {

  var favorites = Cookies.get("favs");
  if (favorites === undefined) {
    var favorites = ","
  }

  // var favorites = ","
  var random;
  var favArray;

  function seeFav() {
    if (favorites === ",") {
      $("div.favoriteswrapper").hide()
    }  else {
      $("div.favoriteswrapper").show()
    }

    favArray = favorites.split(",");

    for (var i = 2; i < favArray.length ; i++){
      $("#Q"+favArray[i-1]).show();
      // console.log(favArray[i-1]+"hi");
    }
  };

  function favoriteButton() {
    seeFav();
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
    random = Math.floor((Math.random() * 10) + 1);

    var randomText = $("#Q" + random).text();

    $("div#randomquote").show();

    $("div#randomquote").html(randomText);

    favoriteButton();
    seeFav();

  });

  $("div#favoritebutton").click(function() {
    favorites = favorites + random + ",";
    Cookies.set("favs",favorites);
    favoriteButton();
    seeFav();
    // alert("fav: "+favorites+"  array: "+favArray+"len: "+favArray.length);
  });

  $("div#clearfav").click(function() {
    favorites = ",";
    Cookies.set("favs",favorites);
    $(".quote").hide();
    favoriteButton();
    seeFav();

  });

});
