function areValuesEqual(a, b) {
  if (typeof a !== typeof b) return false;

  if (typeof a === "object" && a !== null && b !== null) {
    return a === b;
  } else {
    return a == b && a === b;
  }
}

// Testing
console.log(areValuesEqual(5, "5")); // Outputs: false
console.log(areValuesEqual(5, 5)); // Outputs: true
console.log(areValuesEqual([1, 2], [1, 2])); // Outputs: false
const obj = { x: 1 };
console.log(areValuesEqual(obj, obj)); // Outputs: true
console.log(areValuesEqual(null, undefined)); // Outputs: false