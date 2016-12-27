// function for generating a random number between arguments x and y

function randomNum(x, y) {
   let z = Math.floor((Math.random() * (y - x)) + x + 1);
   return z;
}

// function for generating an attack

function damage1() {
   $('#robot1stats').html(`
            <h2>${robot1.name}</h2>
            <h3>rOboT tYPe: ${robot1.type}</h3>
            <h2>hEaLTh: ${robot1.health}</h2>
      `);
   let p = randomNum( (robot1.attack/8), (robot1.attack/4) );
   robot2.health -= p
   $('#update').append(`
            <p class="text-left">${robot1.name} hit ${robot2.name} for a loss of ${p} damage points</p>
      `);
   console.log("robot2 health: ", robot2.health);
};

function damage2() {
   $('#robot2stats').html(`
            <h2>${robot2.name}</h2>
            <h3>rOboT tYPe: ${robot2.type}</h3>
            <h2>hEaLTh: ${robot2.health}</h2>
      `);
   let q = randomNum( (robot2.attack/8), (robot2.attack/4) );
   robot1.health -= q
   $('#update').append( `
            <p class="text-right">${robot2.name} hit ${robot1.name} for a loss of ${q} damage points</p>
      `);
   console.log("robot1 health: ", robot1.health);
};
