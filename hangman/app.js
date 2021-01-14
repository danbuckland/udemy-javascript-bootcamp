// This...
const product = {
  name: 'Influence'
}

// ...is the same as this:
const productTwo = new Object({
  name: 'Influence'
})

// You can add values and functions to the Object prototype
Object.prototype.myCustomMethod = () => {
  console.log('This is a custom method')
} 

productTwo.myCustomMethod()

console.log(product.hasOwnProperty('hasOwnProperty'))