// Setup the word instance as an array of lowercase letters
// Setup another instance property to store guessed letters
// Create a method that gives you the word puzzle back with guesses e.g. "st*a*y"
class Hangman {
  constructor(word, guesses) {
    this.answer = word
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = guesses
    this.currentState = this.getPuzzle()
    this.status = 'playing'
  }

  getPuzzle() {
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

  calculateStatus() {
    if (!this.remainingGuesses) { 
      this.status = 'failed'
    } else if (this.currentState.includes('*')) {
      this.status = 'playing'
    } else {
      this.status = 'finished'
    }
  }

  getStatusMessage() {
    if (this.status === 'failed') {
      return `Too bad you suck! The answer was ${this.answer}.`
    } else if (this.status === 'finished') {
      return `Dude! Sweet! That was awesome!`
    } else {
      return `Guesses remaining: ${this.remainingGuesses}`
    }
  }

  guess(guess) {
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
  }
}
