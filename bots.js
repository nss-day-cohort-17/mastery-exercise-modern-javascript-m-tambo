let Dome = {};


function Robot() {
   this.name = null;
   this.health = 80;
   this.attack = 50;
};

// each class has its own added health and bonus points

// Three robot classes: Agressive, Defensive, Combo

function Aggressive() {
   this.class = "Agressive";
   this.health += 10;
   this.attack += 25;
};

Aggressive.prototype = new Robot();


function Defensive() {
   this.class = "Defensive";
   this.health += 25;
   this.attack += 10;
};
Defensive.prototype = new Robot();


function Combo() {
   this.class = "Combo";
   this.health += 18;
   this.attack += 18;
};
Combo.prototype = new Robot();


// each type is assigned a health and attack bonus using a random range function

// Aggressive types: Blender, Juicer
Dome.Blender = function (x) {
   this.name = x;
   this.type = "Blender";
   this.health = this.health + randomNum(8, 14);
   this.attack = this.attack + randomNum(10, 18);
   this.weapon = " mad chopping skills";
};
Dome.Blender.prototype = new Aggressive();

Dome.Juicer = function (x) {
   this.name = x;
   this.type = "Juicer";
   this.health = this.health + randomNum(13, 17);
   this.attack = this.attack + randomNum(10, 16);
   this.weapon = " slicing and dicing";
};
Dome.Juicer.prototype = new Aggressive();



// Defensive types: Hoover, Roomba
Dome.Hoover = function (x) {
   this.name = x;
   this.type = "Hoover";
   this.health = this.health + randomNum(14, 19);
   this.attack = this.attack + randomNum(10, 17);
   this.weapon = " gut-sucking force";
};
Dome.Hoover.prototype = new Defensive();

Dome.Roomba = function (x) {
   this.name = x;
   this.type = "Roomba";
   this.health = this.health + randomNum(16, 20);
   this.attack = this.attack + randomNum(10, 14);
   this.weapon = " deft maneuvering";
};
Dome.Roomba.prototype = new Defensive();



// Combo types: Broiler, Freezer
Dome.Broiler = function (x) {
   this.name = x;
   this.type = "Broiler";
   this.health = this.health + randomNum(12, 17);
   this.attack = this.attack + randomNum(12, 17);
   this.weapon = " metal-melting heat";
};
Dome.Broiler.prototype = new Combo();

Dome.Freezer = function (x) {
   this.name = x;
   this.type = "Freezer";
   this.health = this.health + randomNum(16, 20);
   this.attack = this.attack + randomNum(12, 14);
   this.weapon = " motor-stopping temperatures";
};
Dome.Freezer.prototype = new Combo();
