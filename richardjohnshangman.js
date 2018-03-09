function hangMan() {
    console.log(`Hi there welcome to HangMan! 
The game you don't want to win?
`)
    var user = prompt('What\'s your name?')
console.log(`Hi ${user}!
The rules of the game are:
1. You'll be shown a word with every letter blanked out. Your aim is guess each letter in the word.
2. The catch is you'll only be able to make 8 wrong guesses before it's game over for hangman...
Good luck!
`)
    
// Globals
var wrongGuess = 0
var hangWord = "dodecahedron".split('')

var xArr = []
for (i = 0; i < hangWord.length; i++) {
    xArr.push('_')
}
console.log(xArr)
    
function nextRound() {
    if(wrongGuess === 8) {
        console.log('Game over! 8 wrong guesses... Let\'s play again')
        xArr = []
        hangMan()
    } else if (xArr.every(l => l !== '_')) {
        youWin()
    } else {    
        gameRound()
    }
}
    
function youWin() {
    console.log('You win! Save Hangman again?')
    xArr = []
    hangMan()
}

function gameRound() {
    var choice = prompt('What letter do you choose?')

    var letterExists = hangWord.some(l => l === choice)
    var findIdxChoice = hangWord.findIndex(l => l === choice)
    var idxArr = []
    
    function findAllIdx(choice) {
        hangWord.forEach((l,i) => {
            if(l === choice) {
                idxArr.push(i)
            }
        })    
        spliceIn(choice)
    }
    console.log('idxArr: ',idxArr)
    
    function spliceIn(choice) {
        for (i = 0; i < idxArr.length; i++){
          xArr.splice(idxArr[i],1,choice)
        }
    }

    if(letterExists) {
        findAllIdx(choice)
        console.log('You got one! Here\'s the word again: ',xArr)
    } else {
        console.log('no match!')
        wrongGuess += 1
    }
    
    nextRound()
}

gameRound()
    
}

hangMan()