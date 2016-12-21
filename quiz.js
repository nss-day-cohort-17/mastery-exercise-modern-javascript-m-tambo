// start with the home screen
showHomeScreen();


// set all event listeners
function activateEvents () {

   // proceed to robot naming on link click
   $('#entry').click(function() {
         showNameBots();
   });

   // proceed to robot select on link click
   $('#selectBotLink').click(function() {
      if ($('#bot1name').val() === "" || $('#bot2name').val() === "") {
         alert("mUsT aSsiGn rOboT iDenTitIes!")
      } else {
         selectBots();
      }
   });

   // proceed to battleField
   $('#battleFieldLink').click(function() {
      // if (// two robots must be selected ) {
      //    alert("mUsT sELecT rOboT tYpEs")
      // } else {
         battleField();
   });

   // return to home screen on link click
   $('#playAgain').click(function () {
      showHomeScreen();
   });

}

activateEvents();


// function resets all HTML elements to hidden
function reSet () {
  $('section').addClass('hidden');
}


// individual functions for displaying each "page"
function showHomeScreen() {
   reSet();
   $('#homeScreen').fadeIn(4567).removeClass('hidden');
   $('body').addClass('homeScreen');
}

function showNameBots() {
   reSet();
   $('#nameBots').removeClass('hidden');
   $('body').addClass('nameBots');
}

function selectBots() {
   reSet();
   $('#selectBots').removeClass('hidden');
   $('body').addClass('selectBots');
}

function battleField() {
   reSet();
   $('#battleField').removeClass('hidden');
   $('body').addClass('battleField');
   // when one of the robots health <= 0, call gameOver()
}

function gameOver() {
   reSet();
   $('#gameOver').removeClass('hidden');
   $('body').addClass('gameOver');
}
