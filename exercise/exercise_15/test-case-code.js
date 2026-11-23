// Exercise 15: evaluateOperation - switch on the operator

function evaluateOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    case "%":
      if (b === 0) throw new Error("Division by zero");
      return a % b;
    case "^":
      return a ** b;
    default:
      throw new Error("Invalid operator");
  }
}

// Testing
console.log(evaluateOperation(5, 3, "+")); // 8
console.log(evaluateOperation(5, 3, "-")); // 2
console.log(evaluateOperation(5, 3, "*")); // 15
console.log(evaluateOperation(5, 3, "/")); // 1.666...
console.log(evaluateOperation(5, 3, "%")); // 2
console.log(evaluateOperation(5, 3, "^")); // 125
