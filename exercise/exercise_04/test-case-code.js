// Exercise 4: areValuesEqual - == vs === and type checking

function areValuesEqual(a, b) {
  if (typeof a !== typeof b) return false;

  if (typeof a === "object" && a !== null && b !== null) {
    return a === b; // objects compare by reference
  } else {
    return a == b && a === b;
  }
}

// Testing
console.log(areValuesEqual(5, "5")); // false (different types)
console.log(areValuesEqual(5, 5)); // true
console.log(areValuesEqual([1, 2], [1, 2])); // false (different references)
const obj = { x: 1 };
console.log(areValuesEqual(obj, obj)); // true (same reference)
console.log(areValuesEqual(null, undefined)); // false
