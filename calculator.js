const exampleAdditionInput = {
  num1: 3,
  num2: 5,
  operation: '+',
}

const exampleSubtractionInput = {
  num1: 5,
  num2: 2,
  operation: '-'
}

const exampleMultiplicationInput = {
  num1: 3,
  num2: 5,
  operation: '*'
}

const exampleDivisionInput = {
  num1: 14,
  num2: 2, 
  operation: '/'
}

const calculator = function(userInput) {
  if (typeof userInput['num1'] !== 'number' || typeof userInput['num2'] !== 'number') {
    console.log('Invalid entry - must enter a number')
  } else {
      let op = userInput.operation
      if (op === 'add' || op === 'addition' || op == '+') {
        console.log(userInput['num1'] + userInput['num2'])
      } else if (op === 'subtract' || op === 'subtraction' || op == '-') {
        console.log(userInput['num1'] - userInput['num2'])
      } else if (op === 'multiply' || op === 'multiplication' || op == '*') {
        console.log(userInput['num1'] * userInput['num2'])
      } else if (op === 'divide' || op === 'division' || op == '/') {
          if (userInput['num2'] === 0) {
            console.log('Cannot divide by 0')
          } else {
            console.log(userInput['num1'] / userInput['num2'])
          }
      } else {
        console.log('Invalid entry - must enter correct type of operator')
      }
    }
}

calculator(exampleAdditionInput)
calculator(exampleSubtractionInput)
calculator(exampleMultiplicationInput)
calculator(exampleDivisionInput)