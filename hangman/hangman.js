// Setup the word instance as an array of lowercase letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back with guesses e.g. "st*a*y"

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split('')
  this.guessedLetters = []
  this.remainingGuesses = guesses
  this.currentState = this.getPuzzle()
  this.status = 'playing'
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = ''
  this.word.forEach(char => {
    if (this.guessedLetters.includes(char) || char === ' ') {
      puzzle += char
    } else {
      puzzle += '*'
    }
  })
  return puzzle
}

Hangman.prototype.calculateStatus = function() {
  // if the user has guesses remaining, status is playing
  if (!this.remainingGuesses) { 
    this.status = 'failed'
    return
  }
  if (this.currentState.includes('*')) {
    this.status = 'playing'
  } else {
    this.status = 'finished'
  }
  // if the user has no guess remaining, status is failed
  // if the user has revealed all the characters, status is finished


}

Hangman.prototype.guess = function(guess) {
  if (this.status !== 'playing') return
  guess = guess.toLowerCase()
  if (!this.remainingGuesses 
      || guess.length > 1 
      || guess.toUpperCase() === guess
      || this.guessedLetters.includes(guess)) {
    return
  }

  const beforeState = this.getPuzzle()
  this.guessedLetters.push(guess)
  this.currentState = this.getPuzzle()
  if (this.currentState === beforeState) this.remainingGuesses--

  this.calculateStatus()
  console.log(this.status)
}