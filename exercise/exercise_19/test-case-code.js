// Exercise 19: normalizeInput - strict equality for null/undefined
// null/undefined throw; other falsy values become "N/A";
// truthy values pass through unchanged.

function normalizeInput(value) {
  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  } else if (value) {
    return value;
  } else {
    return "N/A";
  }
}

// Testing
console.log(normalizeInput("Hello")); // 'Hello'
console.log(normalizeInput(0)); // 'N/A'
console.log(normalizeInput("")); // 'N/A'

try {
  console.log(normalizeInput(null)); // Throws
} catch (e) {
  console.error(e.message); // 'Value cannot be null or undefined'
}
