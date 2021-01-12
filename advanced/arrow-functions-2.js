// Arrow functions do not have access to 'arguments'
const add = function () {
  return arguments[0] + arguments[1]
}

// Will throw an error in Node
const addArrow = () => {
  return arguments[0] + arguments[1]
}

// Arrow functions don't bind 'this'
const car = {
  color: 'Red',
  getSummary: function () {
    return `The car is ${this.color}`
  }
}

// Will return the van is undefined!
const van = {
  color: 'White',
  getSummary: () => {
    return `The van is ${this.color}`
  }
}

// An alternative method definition which does work
const lorry = {
  color: 'Yellow',
  getSummary() {
    return `The lorry is ${this.color}`
  }
}

console.log(add(11, 22, 33, 44)) // 33
console.log(addArrow(11, 22, 33, 44)) // 33
console.log(car.getSummary())
console.log(van.getSummary())
console.log(lorry.getSummary())