

const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')

puzzleEl.textContent = game3.puzzle
guessesEl.textContent = `Guesses remaining: ${game3.remainingGuesses}`

console.log(game3.puzzle)

window.addEventListener('keypress', (e) => {
  game3.guess(e.key)
  puzzleEl.textContent = game3.puzzle
  guessesEl.textContent = game3.statusMessage
})
