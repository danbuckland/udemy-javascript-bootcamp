const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')
const dynamicGame = new Hangman('DEFAULTGAME', 5)

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`)
  }
  const dynamicGame = new Hangman(puzzle, 5)
  puzzleEl.textContent = dynamicGame.puzzle
  guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`
  
  window.addEventListener('keypress', (e) => {
    dynamicGame.guess(e.key)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = dynamicGame.statusMessage
  })
})

getCountry('IR', (error, country) => {
  if (error) {
    throw new Error(error)
  }
  console.log(country.name)
})