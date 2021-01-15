// Prototypal Inheritance
class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
  }

  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 67 - this.age
  }
}

class Student extends Person {
  constructor(firstName, lastName, grade, age, likes) {
    super(firstName, lastName, age, likes)
    this.grade = grade
  }

  getBio() {
    const status = this.grade >= 70 ? 'passing' : 'failing'
    return `${this.firstName} is ${status} the class`
  }

  updateGrade(change) {
    this.grade += change
    if (this.grade < 0) {
      this.grade = 0
    } else if (this.grade > 100) {
      this.grade = 100
    }
  }
}

const mike = new Student('Mike', 'Shinoda', 60, 38)
console.log(mike.getBio())
mike.updateGrade(40)
console.log(mike.getBio())
