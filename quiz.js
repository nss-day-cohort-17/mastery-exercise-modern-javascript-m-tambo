
$(document).ready(function() {

  $("#homeScreen").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
      */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case ".card--name":
          moveAlong = (($("#bot1name").val() !== "") && ($("#bot2name").val()) !== "");
          break;
        case ".card--select":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case ".card--battleDome":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case ".card--gameOver":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
      */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

});
