$(document).ready(function() {

  var hint = 1;
  var level = 1;
  var givenAnswer;
  var correctAnswer = $("#A"+level).html();


  function checkAnswer() {
    var givenAnswer = $("#answer").val();
    if (givenAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      rightAnswer();
    } else {
      alert(level);
    }
    console.log(correctAnswer);

  }

  function rightAnswer() {
    alert("success");
    level = parseInt(level) + 1;
    hint = 0;
    $("div.question").hide(function() {
      $("div.hint").hide(function() {
        $("div#Q"+level).show();
      });
    });
  }

  function wrongAnswer() {
    alert("failure");
    hint = parseInt(hint) + 1;

  }

  function showQuestion() {
    $("div.question").hide(function() {
      $("div.hint").hide(function() {
        $("div#Q"+level).show();

    });
  });
  }

  function showHint() {
    if (hint !== 0) {
      $("div.hint").hide(function() {
        $("div.hint.Q"+level+".H"+hint).delay().show();
        showQuestion();
      });
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
