$(document).ready(function() {

  var hint = 0;
  var level = 1;
  var givenAnswer;
  var correctAnswer;
  var maxlevel = 3;
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

  function rightAnswer() {
    if (level === maxlevel) {
      alert("You winnnnnn")
    } else {
        level = parseInt(level) + 1;
        hint = 0;
        $("div.question").hide(function() {
          $("div.hint").hide(function() {
            $("div#Q"+level).show();
          });
        });
    }
  }

  function wrongAnswer() {
    hint = parseInt(hint) + 1;
    showHint();
  }

  function showQuestion() {
    $("div.question").hide(function() {
      $("div.hint").hide(function() {
        $("div#Q"+level).show();

    });
  });
  }

  function showHint() {
    if (hint !== 4) {
      $("div.hint.Q"+level+".H"+hint).show();
        // showQuestion();
     } else {
       alert("That was sad... here's the next question");
       rightAnswer();
     }
  }

  $("#submit-button").click(checkAnswer);

  showHint();

  $("#play-game").click(function() {
    $("div.video-wrapper").fadeOut(3000);
    showQuestion();
    // $("div#Q" + level).show();
    $("div.game-wrapper").delay(3000).slideDown(3000);
    level = 1;
  });

});
