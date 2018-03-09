// MEMORY GAME - end game logic bit dicey still

function memoryGame() {
    
console.log('Game running')
var username = prompt("What is your name?");
console.log(`Hi ${username}! 
Welcome to the amazing memory pair game! 

The rules are as follows: 
1. You'll be presented with 20 boxes with contents hidden by an 'X'. Choose the number of a box to reveal its contents by typing in the boxes' number when prompted.
2. Then once you've memorised the box's contents, choose another box to reveal it's contents and try to get a match!
3. Once you get a match, the contents of that box will stay revealed. Keep trying to get a match until all boxes are revealed!
`)

xArr = []
function genXArr() {
    xBox = ['X']
    for(i = 0; i < 20; i++) {
        xArr.push([i,xBox])
    }
}

ansArr = [
    "blob",
    "frag",
    "shot",
    "leg",
    "mum!",
    "dad!",
    "bag",
    "four",
    "cheese",
    "dad!",
    "blob",
    "frag",
    "shot",
    "leg",
    "mum!",
    "dad!",
    "bag",
    "four",
    "cheese",
    "dad!",
]    

var round = 1

// Game round logic
function gameStart() {
    genXArr()
    console.log('Here are the boxes...')
    console.log(JSON.stringify(xArr, null, ''))
    boxChoice()
}

function nextRound() {
    console.log('Here are the boxes...')
    console.log(JSON.stringify(xArr, null, ''))
    xCheck()
}  
    
function endGame() {
    console.log('You win! Lets play again')
    xArr = []
    gameStart()
}

function xCheck() {
    round += 1
    console.log(`This is round ${round}`)
    var allMatched = xArr.every(a => {
        // console.log('a[1]: ',a[1])
        a[1] !== 'X' 
    })
    console.log('This is allMatched: ',allMatched)
    allMatched ? endGame() : boxChoice()
}    
    
function boxChoice() {
    var firstBox = prompt("Great! Here are the boxes showing below... What box would you like to see first?")
    xArr.splice(firstBox,1,[Number(firstBox), ansArr[firstBox]])

    console.log('Et voila...')
    console.log(JSON.stringify(xArr, null, ''))

    var secondBox = prompt('Awesome, what\'s your second box?')
    xArr.splice(secondBox,1,[Number(secondBox), ansArr[secondBox]])
    console.log('Nice one')
    console.log(JSON.stringify(xArr, null, ''))

    console.log('This is xArr[0]: ',xArr[0])
    pairCheck(firstBox, secondBox)
}

function pairCheck(firstBox, secondBox) {
if (xArr[firstBox][1] === xArr[secondBox][1]) {
    console.log(`You've matched ${xArr[firstBox][1]}!
Your first choice ${firstBox}
matches your second choice ${secondBox}
Keep going!
`)
} else {
    console.log(`Looks like it's not a match?
Your first choice ${firstBox} - ${xArr[firstBox][1]}
doesn't match your second choice ${secondBox} - ${xArr[secondBox][1]}
Don't give up! Keep trying!
`)
}  
nextRound()
}

gameStart()

}

memoryGame()
