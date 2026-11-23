// Exercise 7: coalesce - return the first truthy argument
// (or the last argument if none are truthy)

function coalesce(...args) {
  for (let arg of args) {
    if (arg) {
      return arg;
    }
  }
  return args[args.length - 1];
}

// Alternative one-liner using logical OR
function coalesceAlternative(...args) {
  return args.reduce((acc, val) => acc || val);
}

// Testing
console.log(coalesce(null, undefined, "", 0, "Hello", "World")); // Hello
console.log(coalesceAlternative(false, NaN, 0, "", "First Truthy")); // First Truthy
