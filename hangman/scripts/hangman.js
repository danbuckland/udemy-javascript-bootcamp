class Hangman {
  constructor(word, guesses) {
    this.answer = word
    this.word = word.toLowerCase().split('')
    this.guessedLetters = []
    this.remainingGuesses = guesses
    this.status = 'playing'
  }

  get puzzle() {
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
    } else if (this.puzzle.includes('*')) {
      this.status = 'playing'
    } else {
      this.status = 'finished'
    }
  }

  get statusMessage() {
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

    const beforeState = this.puzzle
    this.guessedLetters.push(guess)
    if (this.puzzle === beforeState) this.remainingGuesses--

    this.calculateStatus()
  }
}
