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
  puzzleEl.textContent = game.puzzle
  guessesEl.textContent = `Guesses remaining: ${game.remainingGuesses}` 
}

newGameButton.addEventListener('click', newGame)
  
newGame()
  
window.addEventListener('keypress', (e) => {
  game.guess(e.key)
  puzzleEl.textContent = game.puzzle
  guessesEl.textContent = game.statusMessage
})

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(err)
// })

