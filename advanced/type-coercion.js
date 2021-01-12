// Type coercion - string, number, boolean
console.log('5' + 5) // '55'
console.log('5' - 5) // 0
console.log(5 == '5') // true
console.log(5 === '5') // false

const value = true + 12 // 13
const type = typeof value

console.log(type)
console.log(value)