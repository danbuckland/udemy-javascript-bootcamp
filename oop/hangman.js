// Setup the word instance as an array of lowercase letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back with guesses e.g. "st*a*y"

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split('')
  this.guessedLetters = ['a', 'e', 'i', 'o', 'u']
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
  if (!this.remainingGuesses) {
    console.log('You are all out of guesses!')
    return
  }

  if (guess.length > 1 || guess.length === ' ' || !guess.length) return
  
  guess = guess.toLowerCase()
  if (this.guessedLetters.includes(guess)) {
    console.log(`You already guessed ${guess}!`)
    return
  }
  this.remainingGuesses--
  
  let beforeState = this.getPuzzle()
  this.guessedLetters.push(guess)
  if (this.getPuzzle() === beforeState) {
    console.log(`There are no ${guess}'s in the word. Guesses remaining: ${this.remainingGuesses}`)
  } else {
    console.log(`You found a match. Guesses remaining: ${this.remainingGuesses}`)
  }
}

const game1 = new Hangman('California', 5)
const game2 = new Hangman('steady', 4)
const game3 = new Hangman('High Score', 10)

console.log(game1.getPuzzle())
console.log(game2.getPuzzle())
console.log(game3.getPuzzle())
game1.guess('c')
game1.guess('i')
game1.guess('f')
game1.guess('x')
game1.guess('x')
game1.guess('a')
game1.guess('b')
console.log(game1.getPuzzle())