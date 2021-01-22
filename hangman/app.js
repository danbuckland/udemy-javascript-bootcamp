const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')
const dynamicGame = new Hangman('DEFAULTGAME', 5)

getPuzzle(2).then((puzzle) => {
  const dynamicGame = new Hangman(puzzle, 5)
  puzzleEl.textContent = dynamicGame.puzzle
  guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`
  
  window.addEventListener('keypress', (e) => {
    dynamicGame.guess(e.key)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = dynamicGame.statusMessage
  })
}, (err) => {
  throw new Error(err)
})

getCurrentCountry().then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(err)
})

