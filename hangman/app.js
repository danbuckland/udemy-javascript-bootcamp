// Primitive values, there are 5 in JavaScript: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototyep --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

const getScore = function() { return 1 }
const product = 'Computer'
const otherProduct = new String('Phone')
console.log(otherProduct)
console.log(product)
