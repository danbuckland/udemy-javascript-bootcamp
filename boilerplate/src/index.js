const myName = 'Dan'
console.log(myName)

class Hangman {
  myMethod() {
    return 'Hangman class method'
  }
}

const hangman = new Hangman()
console.log(hangman.myMethod())

// Run `babel src/index.js -o public/scripts/bundle.js --presets env` to create bundle.js