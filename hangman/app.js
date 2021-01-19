const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')


// Making an http request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText)
    const dynamicGame = new Hangman(data.puzzle, 10)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`
    window.addEventListener('keypress', (e) => {
      dynamicGame.guess(e.key)
      puzzleEl.textContent = dynamicGame.puzzle
      guessesEl.textContent = dynamicGame.statusMessage
    })
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()