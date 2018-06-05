$(document).ready(function() {

  function test() {
    alert("please work");
  }

  $("#culture").click(function(){
    // alert("i'm here");
    $(".writing").hide();
    $("#cultureText").show();
  });

  $("#product").click(function(){
    // alert("i'm here");
    $(".writing").hide();
    $("#productText").show();
  });

  $("#election").click(function(){
    // alert("i'm here");
    $(".writing").hide();
    $("#electionText").show();
  });

  $("#musings").click(function(){
    // alert("i'm here");
    $(".writing").hide();
    $("#musingsText").show();
  });

});
