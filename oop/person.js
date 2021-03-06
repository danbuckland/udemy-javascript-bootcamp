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

  set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes)
    this.position = position
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
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
mike.fullName = 'Terry Busby'
console.log(mike.getBio())
mike.updateGrade(40)
console.log(mike.getBio())

const janet = new Employee('Janet', 'Hawthorn', 33, 'Back Office Clerk', 'Sudoku')
console.log(janet.getBio())