  /*----- constants -----*/
const PLAYERS = {
  '1': 'Player One',
  '-1': 'Player Two'
}

const FRUITS = {
  'cherry': 'Memory-Card-Images/Cherry.svg',
  'grape': 'Memory-Card-Images/Grape.svg',
  'kiwi': 'Memory-Card-Images/Kiwi.svg',
  'orange': 'Memory-Card-Images/Orange.svg',
  'pineapple': 'Memory-Card-Images/Pineapple.svg',
  'watermelon': 'Memory-Card-Images/Watermelon.svg'
}

const DECK = [
  'cherry', 'cherry', 'cherry', 'cherry', 'grape', 'grape', 'grape', 'grape', 
  'kiwi', 'kiwi', 'kiwi', 'kiwi', 'orange', 'orange', 'orange', 'orange', 
  'pineapple', 'pineapple', 'pineapple', 'pineapple', 'watermelon', 'watermelon', 'watermelon', 'watermelon',
]

  /*----- state variables -----*/
let turn, board, firstChoice, secondChoice, winner, p1Score, p2Score, cardsShowing

  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const cardEls = [...document.querySelectorAll('#board > div')]
const p1ScoreEl = document.getElementById('p1-score')
const p2ScoreEl = document.getElementById('p2-score')
const cardPair = []

  /*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick)
playAgainBtn.addEventListener('click', init)

  /*----- functions -----*/
init()

function init() {
  let shuffleDeck = shuffle(DECK) // moved this into the init function so every time the game is re-initialized, the deck is shuffled
  board = [
    shuffleDeck[0], shuffleDeck[1], shuffleDeck[2], shuffleDeck[3], shuffleDeck[4], shuffleDeck[5], shuffleDeck[6], shuffleDeck[7], 
    shuffleDeck[8], shuffleDeck[9], shuffleDeck[10], shuffleDeck[11], shuffleDeck[12], shuffleDeck[13], shuffleDeck[14], shuffleDeck[15], 
    shuffleDeck[16], shuffleDeck[17], shuffleDeck[18], shuffleDeck[19], shuffleDeck[20], shuffleDeck[21], shuffleDeck[22], shuffleDeck[23], 
  ]
  p1Score = 0
  p2Score = 0
  firstChoice = null
  secondChoice = null
  cardsShowing = 2
  turn = 1
  winner = null
  render()
}

function render() {
  renderBoard()
  renderMessage()
  renderControls()
  renderScores()
}

function renderBoard() { 
  for (let i = 0; i < board.length; i++) {
    const card = document.getElementById(`${i}`)
    if (card.classList.contains('front')) {
      let cardText = board[i]
      let getURL = FRUITS[cardText]
      card.style.backgroundImage = `url('${getURL}')`
    }
  }
}

function renderControls() {
  playAgainBtn.style.visibility = winner ? 'visible' : 'hidden'
}

function renderMessage() {
  if (winner === 'T') {
    messageEl.innerText = "It's a tie!"
  } else if (winner) {
    messageEl.innerHTML = `${PLAYERS[winner]} won the game!`
  } else {
  messageEl.innerHTML = `${PLAYERS[turn]}'s Turn`
  }
}

function renderScores () {
  p1ScoreEl.innerText = `Player One: ${p1Score}`
  p2ScoreEl.innerText = `Player Two: ${p2Score}`
}

function handleClick(evt) {
  const cardIdx = evt.target.id
  const cardFruit = board[cardIdx]
  const cardClicked = cardEls[cardIdx]

  
  if (cardClicked.classList.contains('front')) return

  cardClicked.classList.remove('back')
  cardClicked.classList.add('front')

  cardsShowing++

  if (cardsShowing % 2 !== 0) {
    firstChoice = cardFruit
    cardPair.unshift(cardIdx)
    cardPair.splice(2, 1)
  } 
  else {
    secondChoice = cardFruit
    cardPair.splice(1, 1, cardIdx)
    setTimeout(getMatch(firstChoice, secondChoice), 2000)
  }
  render()
  }

function getMatch (firstChoice, secondChoice) {
  if (firstChoice === secondChoice) {
    const addScore = turn === 1 ? p1Score++ : p2Score++
  } 
   else if (firstChoice !== secondChoice) {
    let firstIdx = parseInt(cardPair[0])
    let secondIdx = parseInt(cardPair[1])
    cardEls[firstIdx].classList.remove('front')
    cardEls[firstIdx].removeAttribute('style')
    cardEls[firstIdx].classList.add('back')
    cardEls[secondIdx].classList.remove('front')
    cardEls[secondIdx].removeAttribute('style')
    cardEls[secondIdx].classList.add('back')
  }
  turn *= -1
  return
}


let seconds = 3;
function countdown() {
  if (seconds > 0) {
    setTimeout(countdown, 1000);
    console.log(seconds)
    seconds --;
  }
  else{ seconds = 3 }
}

function shuffle(arr) {
  const newArray = [...arr]
  const length = newArray.length

  for (let start = 0; start < length; start++) {
    const randomPosition = Math.floor((newArray.length - start) * Math.random())
    const randomItem = newArray.splice(randomPosition, 1)

    newArray.push(...randomItem)
  }

  return newArray
}