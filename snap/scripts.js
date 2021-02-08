const cards = document.querySelectorAll('.memory-card')
const resetButton = document.querySelector('#reset')

let hasFlippedCard = false
let firstCard, secondCard
let lockedBoard = false

const flipCard = function () {
  if (lockedBoard || this === firstCard) return
  this.classList.add('flip')

  if (!hasFlippedCard) {
    firstCard = this
    hasFlippedCard = true
  } else {
    secondCard = this
    lockedBoard = true
    checkForMatch()
  }
}

const checkForMatch = () => {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
  isMatch ? disableCards() : unflipCards()
}

const disableCards = () => {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

const unflipCards = () => {
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
  }, 1000)
}

const resetBoard = () => {
  hasFlippedCard = false
  lockedBoard = false
  firstCard = null
  secondCard = null
}

const resetGame = () => {
  lockedBoard = true
  cards.forEach(card => {
    card.addEventListener('click', flipCard)
    card.classList.remove('flip')
  })
  setTimeout(() => {
    shuffle()
    resetBoard()
  }, 600)
}

const shuffle = () => {
  cards.forEach(card => {
    const randomPos = Math.floor(Math.random() * 12)
    card.style.order = randomPos
  })
}

shuffle()
cards.forEach(card => card.addEventListener('click', flipCard))
resetButton.addEventListener('click', resetGame)