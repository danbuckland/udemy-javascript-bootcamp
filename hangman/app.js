const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 3)
const puzzleEl = document.querySelector('#game')
const guessesEl = document.querySelector('#guesses')


// Making an http request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText)
    const dynamicGame = new Hangman(data.puzzle, 5)
    puzzleEl.textContent = dynamicGame.puzzle
    guessesEl.textContent = `Guesses remaining: ${dynamicGame.remainingGuesses}`

    window.addEventListener('keypress', (e) => {
      dynamicGame.guess(e.key)
      puzzleEl.textContent = dynamicGame.puzzle
      guessesEl.textContent = dynamicGame.statusMessage
    })
  } else if (e.target.readyState === 4) {
    console.log('An error has occurred')
  }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const coutriesReq = new XMLHttpRequest()

coutriesReq.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const countriesData = JSON.parse(e.target.responseText)
    const myCountry = countriesData.find(country => country.alpha2Code === 'GB')
    console.log(myCountry.name)
  } else if (e.target.readyState === 4) {
    console.log('An error has occurred')
  }
})

coutriesReq.open('GET', 'http://restcountries.eu/rest/v2/all')
coutriesReq.send()