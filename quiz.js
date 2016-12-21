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
      selectBots();
   })

   // proceed to battleField
   $('#battleFieldLink').click(function() {
      battleField();
   })

   // return to home screen on link click
   $('#playAgain').click(function () {
      showHomeScreen();
   })

}

activateEvents();


// function resets all HTML elements to hidden
function reSet () {
  $('section').addClass('hidden');
}


// individual functions for displaying each "page"
function showHomeScreen() {
   reSet();
   $('#homeScreen').fadeIn(6789).removeClass('hidden');
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
