$(document).ready(function() {

  var currentPhoto = "1";

  $("div.prev-photo").mouseenter(function(){
    $(this).addClass("navigation");
    $("#prev").show();
  });

  $("div.prev-photo").mouseout(function(){
    $(this).removeClass("navigation");
    $("#prev").hide();
  });

  $("div.next-photo").mouseenter(function(){
    $(this).addClass("navigation");
    $("#next").show();
    // alert("success");
  });

  $("div.next-photo").mouseout(function(){
    $(this).removeClass("navigation");
    $("#next").hide();
    // alert("success");
  });


  $("div.prev-photo").click(function() {

    if (parseInt(currentPhoto) === 1) {
      currentPhoto = 12;
    } else {
      currentPhoto = parseInt(currentPhoto) - 1;
    }

    $("div.main-photo").attr('id',"p" + currentPhoto);
    console.log(currentPhoto);
  });

  $("div.next-photo").click(function() {

    if (parseInt(currentPhoto) === 12) {
      currentPhoto = 1;
    } else {
      currentPhoto = parseInt(currentPhoto) + 1;
    }

    $("div.main-photo").attr('id',"p" + currentPhoto);
    console.log(currentPhoto);
  });


});


// "p"+ parseInt(currentPhoto) + 1
