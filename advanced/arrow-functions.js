const square = (num) => num * num

const squareLong = (num) => {
  return num * num
}

console.log(square(5))

const people = [{
  name: 'Dan',
  age: 33
}, {
  name: 'Heidi',
  age: 17
}, {
  name: 'Anshul',
  age: 25
}]

console.log(people.filter((person) => person.age > 18))

console.log(people.find((person) => person.age === 25).name)