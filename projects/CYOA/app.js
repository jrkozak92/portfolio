const prompt = require('prompt-sync')();
//===========================
// Properties/Objects here
//===========================
const player = {
  name:null,
  hp:100
  // height
  // weight
  // age
  // class
  // hp:100,
  // loadout:null
}
//
// const inventory = {
//   weapon:{
//           name:,
//           damage:
//           }
// }

//===========================
// Functions here
//===========================

//type handling function
// const isString = (input) => {
//   if ((typeof input) === 'string'){
//     return input
//   } else {
//     input = prompt('Invalid Response, please use a string.')
//     isString(input);
//   }
// }
// const isNum = () => {
//
// }

const mapScenes = [
  ['goblin', 'elf', 'ogre'], // bad guys
  ['trader', 'random villager', 'mysterious wizard'], // good guys
  ['empty', 'fork', 'straight'] // paths
]


const checkIfAlive = () => {
  if (player.hp <= 0){
    console.log(`You've been slain!`);
    process.exit();
  }
}

const takeDamage = (amount) => {
  player.hp -= amount;
  console.log(`You have ${player.hp} health left.`);
  checkIfAlive();
}

let currentScene = undefined;
let randomSelection = undefined;


const setRandomScene = () => {
  let randomScene = Math.floor(Math.random() * mapScenes.length);
  randomSelection = Math.floor(Math.random() * mapScenes[randomScene].length);
  currentScene = mapScenes[randomScene][randomSelection];
}

const mapScene = () => {
  // if bad guys
  if ((currentScene === 'goblin') || (currentScene === 'elf') || (currentScene === 'ogre')){
    // console.log('badguy');
    console.log(`You run into a vicious ${currentScene}!`);
    let response = prompt("What would you like to do: Fight, run, or talk? ", 'fight')
    response = response.toLowerCase();
    if (response === 'fight') {
      console.log(`The ${currentScene} growls at you and engages!`);
      console.log(`You slay the ${currentScene}, but take damage in the scuffle!`);
      takeDamage(20);
      if (player.hp <= 0) {
        return;
      }
      setRandomScene();
      mapScene();
    } else if (response === 'run') {
      console.log(`You turn heel like the coward you are, the ${currentScene} howls in victory!`);
      setRandomScene();
      mapScene();
    } else if (response === 'talk') {
      console.log(`The ${currentScene} says something you don't understand. You stare awkwardly. They attack.`);
      console.log(`You slay the ${currentScene}, but take damage in the scuffle!`);
      takeDamage(20);
      checkIfAlive();
      setRandomScene();
      mapScene();
    } else {
      console.log(`That doesn't make any sense. Let's try again.`);
      mapScene();
    }
  }
  // if good guys
  if ((currentScene === 'trader') || (currentScene === 'random villager') || (currentScene === 'mysterious wizard')){
    // console.log('goodguy');
    console.log(`You run into a friendly ${currentScene}.`);
    let response = prompt("What would you like to do: Fight, run, or talk? ", 'talk')
    response = response.toLowerCase();
    if (response === 'fight'){
      console.log(`Murderer!!! The townspeople mob you and you die.`);
      player.hp = 0;
      checkIfAlive();
    } else if (response === 'run'){
      console.log(`The ${currentScene} calls after you "Where you going??"`);
      setRandomScene();
      mapScene();
    } else if (response === 'talk'){
      console.log(`You have a nice short chat with the ${currentScene} and continue down the path out of town."`);
      setRandomScene();
      mapScene();
    } else {
      console.log(`That doesn't make any sense. Let's try again.`);
      mapScene();
    }
  }
  // if paths
  if ((currentScene === 'empty') || (currentScene === 'fork') || (currentScene === 'straight')){
    // console.log('path');
    if (currentScene === 'empty'){
      console.log('You see beautiful scenery, but no way forward. You turn back...')
      setRandomScene();
      mapScene();
    } else if (currentScene === 'fork') {
      console.log(`You find yourself at a fork in the path.`);
      prompt(`Do you go right or left? `, 'right')
      setRandomScene();
      mapScene();
    } else if (currentScene === 'straight') {
      console.log(`The path continues straight.`);
      setRandomScene();
      mapScene();
    } else {
      console.log(`That doesn't make any sense. Let's try again.`);
      mapScene();
    }
  }
}


// displays message and expects response, assigns response to variable value
player.name = prompt('What is your name? ', 'Billybob');
console.log(`Your name is ${player.name}`);
player.height = prompt('What is your height? ', '6');
console.log(`Your height is ${player.height} feet`);
player.weight = prompt('What is your weight? ', '220');
console.log(`Your weight is ${player.weight} lbs`);
player.age = prompt('What is your age? ', '29');
console.log(`Your age is ${player.age} years old`);
player.class = prompt('What is your class? Choose between warrior, wizard, or rogue: ', 'rogue');
console.log(`Your class is ${player.class}`);
console.log(`You are a ${player.height} ft, ${player.weight} lb, ${player.age} years old ${player.class} wearing a 'Hi! My name is:  ${player.name}' sticker nametag.`);
console.log(`You find yourself on a path at midday. The path forks to the East or the North.`);
let directionChoice = prompt('Which direction would you like to go? ', 'North!');
setRandomScene();
console.log(`You follow the path ${directionChoice}.`);
mapScene();
// Call function for scene
