const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')
const newGameButton = document.querySelector('#reset')
let dynamicGame = new Hangman('DEFAULTGAME', 5)
const noOfWords = 2

newGameButton.addEventListener('click', (e) => {
  console.log(e)
  getPuzzle(noOfWords).then((puzzle) => {
    dynamicGame = new Hangman(puzzle, 5)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`
  }).catch((err) => {
    console.log(err)
  })
})

getPuzzle(noOfWords).then((puzzle) => {
  dynamicGame = new Hangman(puzzle, 5)
  puzzleEl.textContent = dynamicGame.puzzle
  guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`
  
  window.addEventListener('keypress', (e) => {
    dynamicGame.guess(e.key)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = dynamicGame.statusMessage
  })
}).catch((err) => {
  console.log(err)
})

getCurrentCountry().then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(err)
})

