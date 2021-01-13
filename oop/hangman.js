const Hangman = function(word, guesses) {
  this.word = word
  this.guesses = guesses
}

const game1 = new Hangman('california', 5)
const game2 = new Hangman('steady', 4)

console.log(game1)
console.log(game2)