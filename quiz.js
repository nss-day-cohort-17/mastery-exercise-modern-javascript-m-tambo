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
      // cannot continue without naming robots
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
   // populate the given robot names above robot options
   // let robot1name = ('#bot1name').value;
   // let robot2name = document.querySelector('#bot2name').value;
   $('#selectBot1').text($('#bot1name').val());
   $('#selectBot2').text($('#bot2name').val());
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
