function simonGame() {
    
console.log('Game running')
var username = prompt("What is your name?");
console.log(`Hi ${username}! 
Welcome to Simon's game! 

The rules are as follows: 
1. Once the game starts, you'll be briefly shown a random button press which is either red ('r'), blue ('b'), green ('g'), or yellow ('y').
2. Then you can type in the button you think that Simon pressed. If it matches, you win the round and Simon will repeat the button press and add on a new one for you to guess.
3. The sequence of button presses that you need to remember will keep growing until it's 20 button presses long... guess all 20 to beat Simon!
`)

// Globals / utils
selectArr = ['r','b','g','y']   
buttonArr = []
playerArr = []
round = 1
var buttonPush = selectArr[getRandomInt(selectArr.length)]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Game round logic
function gameStart() {
    alert('Shall we begin?')
    simonChoice()
}
    
function restartRound() {
    console.log('Restarting round - Here we go!')
    console.log('Simon pressed: ')
    playerArr = []
    displayPriorButtonPresses(buttonArr)
    playerChoice()
}

function nextRound() {
    if (round <= 20) {
        console.log('On to round ' + round + ' - Here we go!')
        round += 1
        playerArr = []
        simonChoice()
    } else {
        winGame()
    }
}
    
function winGame() {
    console.log('You win! You passed 20 rounds with Simon and won!')
    buttonArr = []
    gameStart()
}

function displayPriorButtonPresses(buttonArr) {
    console.log('Simon pressed')
    buttonArr.forEach((b,i) => console.log('i: ',i,' b: ',b))
    // buttonArr.forEach(b => setTimeout(console.log(b),500))
}
    
function simonsButton(buttonPush) {
    console.log('Simon presses: ')
    console.log(buttonPush)
    buttonArr.push(buttonPush)
}
    
function simonChoice() {
    if (buttonArr.length >= 1) {
        displayPriorButtonPresses(buttonArr)
        simonsButton(buttonPush)
    } else {
        simonsButton(buttonPush)
    }
    console.log('buttonArr: ',buttonArr)
    playerChoice()
}
    
function playerChoice() {
    console.log('Your turn...')
    playerArr.length > 0 ? playerArr.length === buttonArr.length : playerArr.length === 1
    console.log('playerArr length set: ',playerArr)
    
    for (i = 0; i < buttonArr.length; i++) {
        var playerButton = prompt('Enter in all the buttons that you saw')
        playerArr.push(playerButton)
    }
    console.log('playerArr post-push: ',playerArr)
    buttonMatch(buttonArr, playerArr)
}

// Conditional results matching logic
function matcher() {
    matchArr = []    
    for(i = 0; i < playerArr.length; i++) {
        playerArr[i] === buttonArr[i] ? matchArr.push(true) : matchArr.push(false)
    }
    console.log('matchArr: ',matchArr)
    return matchArr.every(m => m === true)
}

function buttonMatch(buttonArr, playerArr) {
    if (matcher() == true) {
        console.log('You matched Simon! Keep it up!')
        nextRound()
    } else {
        console.log('Simon got you! Try again...')
        restartRound()
    }
} 
    
gameStart()

}

simonGame()