//
// let tools = prompt('Question?');
//
// // console.log('Hello');
// //
// // you have {
// //   tools:[
// //           {your teeth
// //             they make you $1/day},
// //            {rusty scissors
//                 // They make you $5/day}
//               {old-timey push mower
//                 $25/day},
//               {fancy battery-powered lawnmower
//                 $100/day},
//               {team of starving students
//                 $250/day
//                 -$500 one time}
//
// //         ],
//       // money:number,
//
// //Keep track of currentTool
// //     If you are currently using your teeth, you can buy a pair of rusty scissors for $5, this happens a lot, make an upgrade function
// //       you can only do this once, if you have enough money
// //
// // }
//
// functions: upgrade tool, make money, doWork, checkWin
// win condition: you have the team of starving students tool and $1000 to your name
// at this point prompt a win message

const player = {
  money:0,
  tools: [
    {name:'teeth',   payout:1,  cost:0},
    {name:'rusty scissors',   payout:5,  cost:5},
    {name:'old-timey push mower',   payout:50,  cost:25},
    {name:'fancy battery-powered lawnmower',   payout:100,  cost:250},
    {name:'team of starving students',   payout:250,  cost:500}
  ],
  currentTool: 0,
  currentChoice:'work'
}

const getPlayerChoice = () => {
  player.currentChoice = prompt(`Would you like to start your workday or upgrade your tools? You have $${player.money}, and are currently using your ${player.tools[player.currentTool].name} to do your landscaping. With this method, you earn $${player.tools[player.currentTool].payout} per day of work. Please choose either work or upgrade: `, 'work').toLowerCase();
  doPlayerChoice();
}
//functions
const makeMoney = () => {
  //increases player money by tool payout
  player.money += player.tools[player.currentTool].payout;
  alert(`All your hard work today earns you $${player.tools[player.currentTool].payout}! That means you have $${player.money} now!`)
  checkForWin();
  alert(`You head home for some well deserved rest...`);
  alert(`The alarm already!? How will you start your day?`)
};

const doWork = () => {
  alert(`You get down and dirty with your ${player.tools[player.currentTool].name} all day.`);
}

const checkForUpgrade = () => {
  if (player.currentTool < 4){
    return
  } else {
    alert(`You already have a ${player.tools[player.currentTool].name}, what else could you want? Get to work!`);
    player.currentChoice = 'work';
    checkForWin();
    if (player.hasWon){
      return;
    }
    doPlayerChoice();
  }
}

const upgradeTool = () => {
  checkForWin();
  if (player.hasWon){
    return;
  }
  checkForUpgrade();
  if (player.currentTool < 4){
    player.money -= player.tools[player.currentTool + 1].cost;
  } else {
    return
  }
  if (player.currentTool < 2){
    alert(`You think to yourself "You know, these ${player.tools[player.currentTool].name} just aren't cutting it." So, you go to the store and with your hard earned money, you buy the nicest ${player.tools[player.currentTool + 1].name} in there. You're left with $${player.money} in your pocket, but find yourself reinvigorated with a new sense of accomplishment, and you head out to work for the day.`);
  } else if (2 === player.currentTool){
    alert(`You think to yourself "You know, this ${player.tools[player.currentTool].name} has been great, but it isn't making the cut anymore." So, you go to the store and with your hard earned money, you buy the nicest ${player.tools[player.currentTool + 1].name} in there. You're left with $${player.money} in your pocket, but find yourself reinvigorated and with a new sense of accomplishment you head out to work for the day.`);
  } else {
    alert(`You think to yourself "You know, this ${player.tools[player.currentTool].name} has been great, but what I really need is to plant some seeds and grow this business." So, you go to the store and with your hard earned money, you hire the best ${player.tools[player.currentTool + 1].name} in there. You're left with $${player.money} in your pocket, but find yourself reinvigorated and with a new sense of accomplishment you head out to work for the day with your team.`);
  }
  player.currentTool++;
  player.currentChoice = 'work';
  doPlayerChoice();
}

const checkForWin = () => {
  if (player.money >= 1000 && player.currentTool === 4){
    alert(`You Win at Landscaping! There's nothing left for you to accomplish! Congratulations!`);
    player.hasWon = true;
    doPlayerChoice();
  } else {
    return;
  }
}

const doPlayerChoice = () => {
  if (player.hasWon){
    return;
  } else if ((player.currentChoice === 'work')){
    doWork();
    makeMoney();
    if (player.hasWon){
      return;
    }
    getPlayerChoice();
  } else if (player.currentChoice === 'upgrade'){
    if ((player.currentTool === 4) || (player.money >= player.tools[player.currentTool + 1].cost)) {
      upgradeTool();
    } else {
      alert(`You don't have enough money for that yet! Get to work!`);
      player.currentChoice = 'work';
      doPlayerChoice();
    }
  } else {
    alert(`That's not an option. Please try again.`);
    getPlayerChoice();
  }
}

getPlayerChoice();
