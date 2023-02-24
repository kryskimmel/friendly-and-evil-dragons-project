const FriendlyDragon = require('./classes/friendly-dragon.js');
const EvilDragon = require('./classes/evil-dragon.js');
const Dragon = require('./classes/dragon.js')

let lifeGoals = ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"]

const falkor = new FriendlyDragon('Falkor', 'white', lifeGoals, 'Bastian')

let evilDoings = ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"]
const smaug = new EvilDragon('Smaug', 'black', evilDoings, 'Dwarf King');

let allDragons = Dragon.getDragons(falkor, smaug)




console.log(falkor);
falkor.hasLifeGoals();
console.log(falkor.breathesFire());
console.log(falkor.helpsPeople());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
