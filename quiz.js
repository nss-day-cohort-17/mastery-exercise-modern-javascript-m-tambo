// define function to clear all HTML elements
function reSet () {
  $('section').addClass('hidden');
}

showHomeScreen();

// set all event listeners

// $('#nameBots').removeClass('hidden');

// define a function to show each "page"

function showHomeScreen() {
   reSet();
   $('#homeScreen').fadeIn(5000).removeClass('hidden');
   // set home screen styling
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

function battleDome() {
   reSet();
   $('#battleDome').removeClass('hidden');
   $('body').addClass('battleDome');
}

function gameOver() {
   reSet();
   $('#gameOver').removeClass('hidden');
   $('body').addClass('gameOver');
}
