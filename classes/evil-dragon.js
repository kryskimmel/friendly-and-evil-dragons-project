// Your code here
const Dragon = require("./dragon");

class EvilDragon extends Dragon{
    constructor(name, color, evilDoings, nemesis){
        super(name, color)
        this.evilDoings = evilDoings
        this.nemesis = nemesis
    }
    dontInviteThemOverForDinner(){
        for(let i = 0; i < this.evilDoings.length; i++){
            let evilDo = this.evilDoings[i]
            console.log(`${this.name} will ${evilDo}`)
        }
    }
    burnsNemesis(){
        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
    }
}

// const enderDragon = new EvilDragon(
//     "Ender Dragon",
//     "black", [
//       "spit a fireball at Steve",
//       "rule over all the Endermen",
//       "destroy all blocks in its way"
//     ],
//     "Steve"
//   );
//   console.log(enderDragon);
//   enderDragon.dontInviteThemOverForDinner();
//   console.log(enderDragon.breathesFire());
//   console.log(enderDragon.burnsNemesis());

const drogon = new EvilDragon(
    "Drogon",
    "black-red",
    [
      "eat all your livestock",
      "burn down your castle in Westeros",
      "burn your father and brother"
    ],
    "Night King"
  );
  console.log(drogon);
  drogon.dontInviteThemOverForDinner();
  console.log(drogon.breathesFire());
  console.log(drogon.burnsNemesis());

module.exports = EvilDragon
