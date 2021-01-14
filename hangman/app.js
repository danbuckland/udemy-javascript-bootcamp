

const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 10)
const gameProgress = document.querySelector('#game')
const guessesRemaining = document.querySelector('#guesses')

gameProgress.textContent = game3.getPuzzle()
guessesRemaining.textContent = `Guesses remaining: ${game3.remainingGuesses}`

// console.log(game1.getPuzzle())
// console.log(game2.getPuzzle())
// console.log(game3.getPuzzle())
console.log(game3.getPuzzle())

window.addEventListener('keypress', (e) => {
  game3.guess(e.key)
  gameProgress.textContent = game3.getPuzzle()
  guessesRemaining.textContent = `Guesses remaining: ${game3.remainingGuesses}`
})
