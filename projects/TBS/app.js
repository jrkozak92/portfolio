const prompt = require('prompt-sync')();

//Joey's Breakdown
// //diving game
// // characters then actions
// 2 player objects
//   each player has a barracks
//   hitpoints: 10
//     each barracks stores peons
//       peons have properties - objects
//         name
//         job
//           nothing
//           repair
//           attack
// game will go:
// prompt for user input
//   Options:
//     create a peon = function
//       give it a name
//       add it to the correct barracks
//         job = nothing
//     select a peon
//       pick which one
//         pick an action
//           options:
//             attack
//               set the peon's job = attack
//             repair
//               set the peon's job = repair


//Roc's Breakdown
//You are a deep sea diver
//2 players each has a barracks
// hitpoints : 10
// barracks have peons
//peons have properties - objects
//name
//job
//nothing
//repair
//attack

//game will go:
//prompt for input
//create a peon = function
//give it a name
//add it to the correct barracks
//job = nothing
//select a peon
//pick which one
//pick an action
//options:
//attack
//set job as attack
//repair
//set job as repair

// ======================================================================
//                  Objects
// ======================================================================
const player = {
    hitPoints: 10,
    barracks: [
        { name: 'Bob', job: 'nothing' },
        { name: 'Jim', job: 'nothing' },
        { name: 'Dan', job: 'nothing' }
    ]
}

const computer = {
    hitPoints: 10
}


// ======================================================================
//                  Functions
// ======================================================================

const peonGenerator = () => {
    const peon = {
        name: '',
        job: 'nothing'
    }

    peon.name = prompt(`What would you like to name the peon ?: `)

    player.barracks.push(peon)
}

const peonSelector = () => {
    let selectedPeon = prompt(`Which peon would you like to select ?: `)
    let noName = true

    for (let i = 0; i < player.barracks.length; i++) {
        if (player.barracks[i].name === selectedPeon) {
            peonIndex = i
            noName = false
        }
    }

    if (noName) {
        prompt(`That peon doesn't exsist, go back to peon choice:`)
        return peonSelector()
    }

    peonActionSelector(peonIndex)
}

let peonIndex = null

const peonActionSelector = () => {
    let selectedPeonAction = prompt(`Would you like the peon to attack or repair ?:`)
    if (selectedPeonAction === 'attack' || selectedPeonAction === 'repair') {
        player.barracks[peonIndex].job = selectedPeonAction
    } else {
        peonActionSelector()
    }

}


const peonsAction = () => {
    for (let i = 0; i < player.barracks.length; i++) {
        if (player.barracks[i].job === 'attack') {
            computer.hitPoints--
            prompt(`${player.barracks[i].name} attacked!!`)
        } else if (player.barracks[i].job === 'repair') {
            player.hitPoints++
            prompt(`${player.barracks[i].name} repaired`)
        }
    }
}

const computerTurn = () => {
    let computerValue = Math.floor((Math.random() * 5) + 1);
    if (Math.random() < 0.5) {
        computer.hitPoints += computerValue
        prompt(`Computer repairs`)
    } else {
        player.hitPoints -= computerValue
        prompt(`Computer attacks!!`)
    }


}

const checkGameStatus = () => {
    if (player.hitPoints <= 0 && computer.hitPoints <= 0) {
        console.log(`It's a tie!!!`);
        process.exit();
    } else if (player.hitPoints <= 0) {
        console.log(`Computer wins!!!`);
        process.exit();
    } else if (computer.hitPoints <= 0) {
        console.log(`Player wins!!!`);
        process.exit();
    } else {
        console.log(`Computer: `);
        console.log(computer);
        console.log(`Player: `);
        console.log(player);
        console.log(`Here is where you stand in the battle: `);
    }
}

const playGame = () => {
    playerChoice()
    peonsAction()
    computerTurn()
    checkGameStatus()
}

const playerChoice = () => {
    let decision = prompt(`Would you like to create a peon or select a peon ?: `)
    decision = decision.toLowerCase()
    if (decision === 'create') {
        peonGenerator()
    } else if (decision === 'select') {
        if (player.barracks.length !== 0) {
            console.log(player.barracks);
            peonSelector()
        } else {
            prompt(`You don't have any peons, you need to create one:`)
            peonGenerator();
        }


    } else {
        prompt(`Sorry didn't recocognize that response, please enter again: `)
        playerChoice()
    }
}




while (player.hitPoints > 0 && computer.hitPoints > 0) {
    playGame()
}
