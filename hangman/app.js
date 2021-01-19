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


// const coutriesReq = new XMLHttpRequest()

// coutriesReq.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const countriesData = JSON.parse(e.target.responseText)
//     const myCountry = countriesData.find(country => country.alpha2Code === 'GB')
//     console.log(myCountry.name)
//   } else if (e.target.readyState === 4) {
//     console.log('An error has occurred')
//   }
// })

// coutriesReq.open('GET', 'http://restcountries.eu/rest/v2/all')
// coutriesReq.send()