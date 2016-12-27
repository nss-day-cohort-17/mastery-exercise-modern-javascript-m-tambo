let robot1;
let robot2;
let robot1name;
let robot2name;


// start with the home screen
showHomeScreen();


//----------------- all event listeners --------------------

function activateEvents () {

   // proceed to robot naming on link click
   $('#entry').click(function() {
         showNameBots();
   });

   // proceed to robot select on link click
   $('#selectBotLink').click(function() {
      robot1name = $('#bot1name').val();
      robot2name = $('#bot2name').val();
      // cannot continue without naming robots
      if ($('#bot1name').val() === "" || $('#bot2name').val() === "") {
         alert("mUsT aSsiGn rOboT iDenTitIes!")
      } else {
         selectBots();
      }
   });

   // generate robot1 instance and display selected type below
   $('#select1').change( function(e) {
      let z = e.target.value
      robot1 = new Dome[z](robot1name);
      $('#showBot1Type').html(z);
   });

   // generate robot2 instance and display selected type below
   $('#select2').change( function(e) {
      let y = e.target.value
      robot2 = new Dome[y](robot2name);
      $('#showBot2Type').html(y);
   });


   // proceed to battleField
   $('#battleFieldLink').click( function() {
      if ( robot1 === undefined || robot2 === undefined ) {
         alert("mUsT sELecT rOboT tYpEs");
      } else {
         battleField();
      }
   });

   // attack button
   $('#attack').click( function() {
      gamePlay();
   });

   // return to home screen on link click
   $('#playAgain').click(function () {
      robot1 = undefined;
      robot2 = undefined;
      showHomeScreen();
   });

}

activateEvents();



//--------- individual functions for displaying each "page" -----------------

// clear all HTML elements on each "page turn"
function reSet () {
  $('section').addClass('hidden');
}

// show just the elements and styling of each "page"
function showHomeScreen() {
   reSet();
   $('#homeScreen').fadeIn(4000).removeClass('hidden');
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
   // populate given names above select tabs
   $('#selectBot1').text($('#bot1name').val());
   $('#selectBot2').text($('#bot2name').val());
}

function battleField() {
   reSet();
   $('#battleField').removeClass('hidden');
   $('body').addClass('battleField');
}

function gameOver() {
   reSet();
   $('#gameOver').removeClass('hidden');
   $('body').addClass('gameOver');
}



// ------- function for back-and-forth damage hits -------
function gamePlay() {
   damage1()
   if (robot2.health <= 0) {
      robot1wins();
   } else {
      setTimeout(damage2, 1000);
   }
   if (robot1.health <= 0) {
      robot2wins();
   }
}


// --------- functions for the two different outcomes ------
function robot1wins() {
   gameOver();
   $('#outcome').html(`
                  <h1>${robot1.name} defeated ${robot2.name} with ${robot1.weapon}</h1>
                  `)
}

function robot2wins() {
   gameOver();
   $('#outcome').html(`
                  <h1>${robot2.name} defeated ${robot1.name} with ${robot2.weapon}</h1>
                  `)
}
