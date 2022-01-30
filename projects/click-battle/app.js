let $playerScore = 0
let $computerScore = 0
let $winningNumber = 10
let level = 1
let wait = 1000
let bombs = 0
let powerupUsed = false

//Function found https://flaviocopes.com/how-to-slow-loop-javascript/
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const startGame = () => {
    $('#start').addClass('hide');
    $('#click-here').toggleClass('hide');
    $('#player-score').text($playerScore)
}

const playerClick = () => {
    $playerScore++
    $('#player-score').text($playerScore)
    winCon();
}

const winCon = () => {
    if ($playerScore == $winningNumber) {
        console.log('player wins!');
        $('#summary').text(`You win!!!! Let's step it up a notch!`);
        $('#click-here').prop("disabled", true);
        $('#next-level').removeClass('hide');
    } else if ($computerScore == $winningNumber) {
        console.log('computer wins!');
        $('#summary').text(`Computer wins!!!!`);
        $('#click-here').prop("disabled", true).addClass('hide');
        $('#try-again').removeClass('hide')
        $('#start-over').removeClass('hide')
    } else {
        $('#summary').text(`Keep Going!!!!`);
    }
}



const computerClick = async () => {
  for (let i = 0; i < $winningNumber; i++) {
      if ($computerScore < $winningNumber && $playerScore < $winningNumber) {
          winCon();
          await sleep(wait)
          if (powerupUsed) {
            i = 0
            powerupUsed = false
          }
          $computerScore++
          $('#computer-score').text($computerScore)
          winCon();
      }
  }
}

const levelUp = () => {
    level++;
    addPowerup()
    wait = ((1/level)*1000)
    console.log(wait);
    $('#start').removeClass('hide');
    $('#level').text(level);
    $('#next-level').addClass('hide');
    $('#player-score').text($playerScore);
    $('#click-here').addClass("hide")
    $('#click-here').prop("disabled", false)
    $playerScore = 0;
    $computerScore = 0;
    $('#player-score').text($playerScore)
    $('#computer-score').text($computerScore)
    $('#summary').text(`Whenever you're ready...`)
}

const tryAgain = () => {
  console.log(wait);
  $('#start').removeClass('hide')
  $('#try-again').addClass('hide')
  $('#next-level').addClass('hide')
  $('#start-over').addClass('hide')
  $('#click-here').addClass("hide")
  $('#click-here').prop("disabled", false)
  $playerScore = 0;
  $computerScore = 0;
  $('#player-score').text($playerScore)
  $('#computer-score').text($computerScore)
}
//Other powerups could be:
//half-speed for computer for the rest of that round
//pause computer for some amount of time
//?...
const addPowerup = () => {
  if((level % 4) == 0) {
    bombs++
    alert(`You've earned 1 Bomb! Press 'f' to set the Computer's score to 0 at any time! Total bombs: ${bombs}`)
  }
}

const usePowerup = () => {
  if (bombs > 0){
    $computerScore = 0
    $('#computer-score').text($computerScore)
    powerupUsed = true
    bombs--
  }
}

const startOver = () => {
  location.reload()
}

$(() => {
    $('#player-score').text($playerScore)
    $('#level').text(level)
    $('#start').on('click', startGame)
    $('#start').on('click', computerClick)
    $('#click-here').on('click', playerClick)
    $('#next-level').on('click', levelUp)
    $('#try-again').on('click', tryAgain)
    $('#start-over').on('click', startOver)
    $('#click-here').keydown((e) => {
    if (e.which == 70) {
      if (bombs !== 0){
      $('body').css('background-image','radial-gradient(red, white)')
      }
      usePowerup()
    }
    })
    $('#click-here').keyup((e) => {
    if (e.which == 70) {
        $('body').css('background-image','none')
    }
    })
    $('#submit').on('click', () => {
      console.log($('#winning-number').val())
      $winningNumber = $('#winning-number').val()
      $('#winning-number').text('')
    })
})
