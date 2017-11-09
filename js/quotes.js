$(document).ready(function() {

  $("div#randombutton").click(function() {
    var random = Math.floor((Math.random() * 5) + 1);

    var randomText = $("#Q" + random).text();

    $("div#randomquote").show();

    $("div#randomquote").html(randomText);
  });

  $("div#favoritebutton").click(function() {


    seefav();

  });

  function seefav() {
    if (favorites !== undefined) {
      $("div.favoriteswrapper").show()
    } else if  (parseInt(favorites) = 0) {
      $("div.favoriteswrapper").show()
    }  else {
      $("div.favoriteswrapper").hide()
    }
  };

});
