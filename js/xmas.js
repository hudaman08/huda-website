$(document).ready(function() {

  var hint = 0;
  var level = 1;
  var givenAnswer;
  var correctAnswer;
  var maxLevel = 6;
  // var correctAnswer = $("#A"+level).html();


  function checkAnswer() {
    var givenAnswer = $("#answer").val();
    var correctAnswer = $("#A"+level).html();
    if (givenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      rightAnswer();
    } else {
      wrongAnswer();
    }
  }

// timer section

function doSomething() {
  // alert("YAY!");
  $("div#timer").hide();
  $("div#timer").html("Get Ready To Unwrap!!")
}


function startTimer () {
  $("div#timer").show();
  var timeLeft = 2;

  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      new Audio("../audio/buzzer.mp3").play()
      doSomething();
    } else {
      $("div#timer").html(timeLeft + " seconds remaining"),
      // elem.innerHTML = ;
      timeLeft--;
    }
  }
}


  function rightAnswer() {
    startTimer();
    hint = 0;
    $("#answer").attr("type", "text");
     $("#answer").val("");
    // $("#answer").html("");
    $("div.game-wrapper").hide(function() {
      $("div.hint").hide(function() {
        $("div.T"+level).show(function() {
          $("div.task-wrapper").show();
        });
      });
    });
    }

  function wrongAnswer() {
    hint = parseInt(hint) + 1;
    showHint();
  }

  function showQuestion() {
    $("#P"+level).css("color","green");
    $("div.question").hide(function() {
      $("div.task-wrapper").hide(function() {
        $("div.task").hide();
      });
    });
    if (level == maxLevel) {
      winningFunction();
    } else {
      level = parseInt(level) + 1;
      $("div#Q"+level).show(function() {
        $("div.game-wrapper").show();
      });
    }
  }

  function winningFunction() {

    $("body").css({"background-image": 'url("../audio/confetti.gif")', "background-size":"cover"  });
    new Audio("../audio/winner-song.mp3").play()
    $("div.winner-circle-wrapper").show();
  }

  function showHint() {
    if (hint !== 4) {
      $("div.hint.Q"+level+".H"+hint).show();
        // showQuestion();
     } else {
       alert("That was sad... open a present to make you feel better");
       rightAnswer();
     }
  }

  $("#submit-button").click(checkAnswer);
  $("#task-complete").click(showQuestion);

  // showHint();

  $("#play-game").click(function() {
    // setTimeout(showQuestion(),4000);
    $("div.video-wrapper").fadeOut(2000);
    $("div.intro").fadeOut(2000);
    $("div#Q" + level).show();
    $("div.progress-wrapper").delay(2000).slideDown(2000);
    $("div.game-wrapper").delay(2000).slideDown(2000);

    // level = 1;
  });

});
