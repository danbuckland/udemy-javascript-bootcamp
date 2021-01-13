const Person = function(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const me = new Person('Dan', 'Buckland', 33)
const person2 = new Person('Milly', 'Turner', 12)

console.log(me)
console.log(person2)