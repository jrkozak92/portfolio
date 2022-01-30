const prompt = require('prompt-sync')();

/* first since it's gonna be the character then the monster, we need two variables.
plus with some objects data strucuture
loops will be needed for different alien spaceships
Name: USS Schwarzenegger
hull - 20
firepower - 5
accuracy - .7
Alien ship:

hull - between 3 and 6
firepower - between 2 and 4
accuracy - between .6 and .8
function to list alienships maybe generate alienship

You attack the alien ship - function for attacking the alien ship
if the ship survives- if statements will be used then
alculate the chance that the damage will hit the opposing ship using Math.random()
If the ship's accuracy is 0.8 - then if the number generated from Math.random() is less than or equal to 0.8
then the attack will be successful. If the value is greater than 0.8 then the attack has missed.


Example use of accuracy to determine a hit:


if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
    We always attack first
    We can only attack ships in order
    Retreat
    Functions should one thing each

    attackAliens, check hit, alien take damage, check hull on the alien ship, if alien is not destroyed, they'll attack
aliens attack, check hit, we take damage, we check out hull, if we dont' die, then we just loop

`` for string interpolation
}
process.exit gets you out of a node based program
Math.random valuates to a decimal numder between 0 and 1
toFixed - rounds decimals to some other decimals
*/

const ourShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    target: 0
}

const alienShip = {
    name: "Space Jam",
    hull: 3,
    firepower: 2,
    accuracy: .6
}

const alienShips = [
  // { name: str, hull: num, firepower: num, accuracy: num },
  // { name: str, hull: num, firepower: num, accuracy: num },
  // { name: str, hull: num, firepower: num, accuracy: num },
  // { name: str, hull: num, firepower: num, accuracy: num },
  // { name: str, hull: num, firepower: num, accuracy: num },
  // { name: str, hull: num, firepower: num, accuracy: num },
]

const destroyedShip = {ship: 'Destroyed'}
let fireAgain = false;

const showStanding = () => {
  console.log(`Here's where we stand: `)
  console.log(alienShips, ourShip)
  prompt(`The battle rages on...`)
}
//Built base frame to hold in all the other functions//
const battle = () => {
    attackAliens(ourShip)
    checkHull(alienShips[ourShip.target])
    if (fireAgain){
      fireAgain = false;
      return
    }
    attackUs(alienShips[ourShip.target])
    checkHull(ourShip)
    showStanding();
}

const checkHit = (ship) => {
    if (Math.random() < ship.accuracy) {
      if (ship === ourShip) {
        prompt(`The ${ship.name}'s shot hits!`)
      } else {
        prompt(`${ship.name}'s shot hits!`)
      }
      return true
    }
    else {
        if (ship === ourShip) {
          prompt(`The ${ship.name}'s shot misses!`)
        } else {
          prompt(`${ship.name}'s shot misses!`)
        }
        return false
    }
}

const checkHull = (ship) => {
    if (ship.hull > 0) {
        return
    }
    else {
        if (ship === ourShip) {
            prompt(`The ${ourShip.name} is destroyed... The Alien Horde sets its sights on Earth...`)
            endGame()
        }
        else {
            if (ourShip.target < 5) {
              prompt(`${alienShips[ourShip.target].name} destroyed! Target ${alienShips[ourShip.target + 1].name}! `)
              alienShips.splice(ourShip.target, 1, destroyedShip)
              ourShip.target++
              takeAction()
              fireAgain = true;
            } else {
              prompt(`${alienShips[ourShip.target].name} destroyed! No enemy ships left on radar!`)
              alienShips.splice(ourShip.target, 1, destroyedShip)
              prompt(`Congratulations, Captain! We've defeated the Alien Horde! Until next time...`)
              endGame()
            }
        }
    }
}

const takeAction = () => {
    let decision = prompt(`Time to strategize before the next one arrives. Will we Retreat or Continue? `)
    decision = decision.toLowerCase()
    if (decision === "retreat") {
        prompt(`The ${ourShip.name} retreats. The remaining ${alienShips.length - ourShip.target} Alien Ships advance...`)
        endGame()
    }
    else if (decision === "continue") {
        showStanding()
        return
    }
    else {
        console.log("Transmission interrupted, confirm orders!")
        takeAction()
    }
}

const endGame = () => {
    prompt("Game Over")
    process.exit()
}

const attackAliens = (ship) => {
    console.log(`The ${ourShip.name} takes aim and... `);
    prompt(`Fire!`)
    if (checkHit(ship)) {
        alienTakeDamage()
    }
}
const alienTakeDamage = () => {
    alienShips[ourShip.target].hull -= ourShip.firepower
}

const attackUs = (ship) => {
  prompt(`The ${alienShips[ourShip.target].name} takes aim and fires!`)
    if (checkHit(ship)) {
        weTakeDamage()
    }
}
const weTakeDamage = () => {
    ourShip.hull -= alienShips[ourShip.target].firepower
    if (ourShip.hull > 0){
      prompt(`We've taken damage, but weapons are still online! Our hull is at ${ourShip.hull * 5}%!`);
    } else {
      prompt(`AAAHHHHGGHGHHGHGHHGHGGGGGGG`);
    }
}

const generateAliens = () => {
    for (let i = 0; i < 6; i++) {
        let hullValue = Math.round(3 + (Math.random() * 3))
        let fireValue = Math.round(2 + (Math.random() * 2))
        let accValue = ((0.6) + Math.round((Math.random() * (0.2)) * 10) / 10)
        alienShips.push({ name: `Alien Ship ${(i + 1)}`, hull: hullValue, firepower: fireValue, accuracy: accValue})
    }
    // console.log(alienShips)
}
// generateAliens - an Array, each index in that Array, we want it to be an object
// each object will be an alien ship with different values
// Loop to generate an array that is 6 elements long. For Loop
generateAliens()
prompt(`Earth has been attacked by a horde of aliens! You are the captain of the USS Schwarzenegger, on a mission to destroy every last alien ship. Get to Work!`)
console.log(`Here's what we're dealing with:`);
console.log(alienShips);
prompt(``);
console.log(`And here is our ship: `);
console.log(ourShip);
prompt(``);
prompt(`We are within range of ${alienShips[ourShip.target].name}! Ready to fire on your command! `);
while (ourShip.hull > 0) {
  // console.log(alienShips[ourShip.target])
  // console.log(ourShip)
  battle()
}
