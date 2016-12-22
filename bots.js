var robot1
var robot2

function Robot () {
   this.name = null;
   this.health = 80;
   this.attack = 50;
};



// Three robot classes: Agressive, Defensive, Combo

function Aggressive() {
   this.class = "Agressive";
   this.health = this.health + 10;
   this.attack = this.attack + 25;
};

Aggressive.prototype = new Robot();


function Defensive() {
   this.class = "Defensive";
   this.health = this.health + 25;
   this.attack = this.attack + 10;
};
Defensive.prototype = new Robot();


function Combo() {
   this.class = "Combo";
   this.health = this.health + 18;
   this.attack = this.attack + 18;
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

function Freezer() {

};
Freezer.prototype = new Combo();
