// Prototypal Inheritance
const Person = function(firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`

  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`
  })
  return bio
}

Person.prototype.setName = function (fullName) {
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = names[1]
}

const me = new Person('Dan', 'Buckland', 33, ['Xbox', 'Halo', 'VR'])
const person2 = new Person('Milly', 'Turner', 12, ['horses', 'school', 'drag'])

console.log(me.getBio())
console.log(person2.getBio())
person2.setName('Alexis Matteo')
console.log(person2)