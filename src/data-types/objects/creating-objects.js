// TODO: write code in this section to pass the tests. You will need to add new code

const accessingElements = require("../arrays/accessing-elements")

// as well as modify some of the existing code
const person = {
  name: "Jane",
  age: 32
  
}

console.log('\nExercise 1:')
console.log(person)

const computer = {
  form: "laptop",
  specs: {
    memory: "16GB",
    storage: "1TB"
  }
}

console.log('\nExercise 2:')
console.log(computer)

// Do not edit this exported object
module.exports = {
  person: person,
  computer: computer
}
