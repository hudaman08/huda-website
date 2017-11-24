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
    if (level == maxlevel) {
      alert("You winnnnnn")
    } else {
        hint = 0;
        $("div.game-wrapper").hide(function() {
          $("div.hint").hide(function() {
            $("div.T"+level).show(function() {
              $("div.task-wrapper").show();
            });
          });
        });
    }
  }

  function wrongAnswer() {
    hint = parseInt(hint) + 1;
    showHint();
  }

  function showQuestion() {
    level = parseInt(level) + 1;
    $("div.question").hide(function() {
      $("div.task").hide(function() {
        $("div.task-wrapper").hide(function() {
          $("div#Q"+level).show(function() {
            $("div.game-wrapper").show();
          });
        });
      });
    });
  alert("YAY next question")
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
  $("#task-complete").click(showQuestion);

  showHint();

  $("#play-game").click(function() {
    $("div.video-wrapper").fadeOut(3000);
    showQuestion();
    // $("div#Q" + level).show();
    $("div.game-wrapper").delay(3000).slideDown(3000);
    level = 1;
  });

});
