var robot1
var robot2

function Robot () {
   this.name = null;
   this.health = 50;
   this.attack = 50;
};



// Three robot classes: Agressive, Defensive, Combo

function Aggressive() {

};
Aggressive.prototype = new Robot();


function Defensive() {

};
Defensive.prototype = new Robot();


function Combo() {

};
Combo.prototype = new Robot();




// Aggressive types: Blender, Juicer
function Blender() {

};
Blender.prototype = new Aggressive();

function Juicer() {

};
Juicer.prototype = new Aggressive();



// Defensive types: Hoover, Roomba
function Hoover() {

};
Hoover.prototype = new Defensive();

function Roomba() {

};
Roomba.prototype = new Defensive();



// Combo types: Broiler, Freezer
function Broiler() {

};
Broiler.prototype = new Combo();

function Roomba() {

};
Freezer.prototype = new Combo();
