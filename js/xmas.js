$(document).ready(function() {

  var hint = 0;
  var level = 1;
  var givenAnswer;
  var correctAnswer;
  var maxlevel = 6;
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
    $("div.game-wrapper").hide(function() {
      $("div.hint").hide();
    });
    if (level == maxlevel) {
      $("div.winner-circle-wrapper").show();
    } else {
        hint = 0;
        $("div.T"+level).show(function() {
          $("div.task-wrapper").show();
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
      $("div.task-wrapper").hide(function() {
        $("div.task").hide(function() {
          $("div#Q"+level).show(function() {
            $("div.game-wrapper").show();
          });
        });
      });
    });
  }

  function showHint() {
    if (hint !== 4) {
      $("div.hint.Q"+level+".H"+hint).show();
        // showQuestion();
     } else {
       alert("That was sad... here's the next task");
       rightAnswer();
     }
  }

  $("#submit-button").click(checkAnswer);
  $("#task-complete").click(showQuestion);

  showHint();

  $("#play-game").click(function() {
    // setTimeout(showQuestion(),4000);
    $("div.video-wrapper").fadeOut(2000);
    $("div#Q" + level).show();
    $("div.game-wrapper").delay(2000).slideDown(2000);

    // level = 1;
  });

});
