// Exercise 6: evaluateExpression - short-circuit evaluation
// funcA() || (funcB() && !funcC())
// || skips the right side if funcA() is true;
// && only calls funcC() if funcB() is true.

function evaluateExpression(funcA, funcB, funcC) {
  return funcA() || (funcB() && !funcC());
}

// Testing
function funcA() {
  console.log("funcA called");
  return false;
}

function funcB() {
  console.log("funcB called");
  return true;
}

function funcC() {
  console.log("funcC called");
  return false;
}

console.log(evaluateExpression(funcA, funcB, funcC));
// funcA called, funcB called, funcC called, true
