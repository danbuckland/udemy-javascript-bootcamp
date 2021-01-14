// Setup the word instance as an array of lowercase letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back with guesses e.g. "st*a*y"

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split('')
  this.guessedLetters = []
  this.remainingGuesses = guesses
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

Hangman.prototype.guess = function(guess) {
  guess = guess.toLowerCase()
  if (!this.remainingGuesses 
      || guess.length > 1 
      || guess.toUpperCase() === guess
      || this.guessedLetters.includes(guess)) {
    return
  }
  
  const beforeState = this.getPuzzle()
  this.guessedLetters.push(guess)
  if (this.getPuzzle() === beforeState) this.remainingGuesses--
}