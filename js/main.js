  /*----- constants -----*/
const PLAYERS = {
  '1': 'Player One',
  '-1': 'Player Two'
}

const FRUITS = {
  'cherry': '..Memory-Card-Images/Cherry.jpg',
  'grape': '..Memory-Card-Images/Grape.jpg',
  'kiwi': '..Memory-Card-Images/Kiwi.jpg',
  'orange': '..Memory-Card-Images/Orange.jpg',
  'pineapple': '..Memory-Card-Images/Pineapple.jpg',
  'watermelon': '..Memory-Card-Images/Watermelon.jpg'
}

  /*----- state variables -----*/
let turn, board, scores, winner

  /*----- cached elements  -----*/
const messageEl = document.querySelector('h1')
const playAgainBtn = document.querySelector('button')
const boardEls = [...document.querySelectorAll('#board > div')]
const p1Score = document.getElementById('p1-score')
const p2Score = document.getElementById('p2-score')

  /*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleClick)
playAgainBtn.addEventListener('click', init)

  /*----- functions -----*/
init()

function init() {
  board = [
    'cherry', 'cherry', 'cherry', 'cherry', 'grape', 'grape', 'grape', 'grape', 
    'kiwi', 'kiwi', 'kiwi', 'kiwi', 'orange', 'orange', 'orange', 'orange', 
    'pineapple', 'pineapple', 'pineapple', 'pineapple', 'watermelon', 'watermelon', 'watermelon', 'watermelon',
  ]
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
  
}

function renderControls() {

}

function renderMessage() {

}

function renderScores () {

}

function handleClick() {
  console.log('click')
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