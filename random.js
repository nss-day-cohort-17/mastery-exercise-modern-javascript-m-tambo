// function for generating a random number between arguments x and y

function randomNum(x, y) {
   let z = Math.floor((Math.random() * (y - x)) + x + 1);
   return z;
}
