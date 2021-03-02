import "regenerator-runtime/runtime";
import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')
const newGameButton = document.querySelector('#reset')
const noOfWords = 2
const noOfGuesses = 5
let game

const newGame = async () => {
  const puzzle = await getPuzzle(noOfWords)
  game = new Hangman(puzzle, noOfGuesses)
  render()
}

const render = () => {
  guessesEl.textContent = game.statusMessage
  puzzleEl.innerHTML = ''
  for (const letter of game.puzzle) {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
  }
}

newGameButton.addEventListener('click', newGame)
  
newGame()
  
window.addEventListener('keypress', (e) => {
  game.guess(e.key)
  render()
})

