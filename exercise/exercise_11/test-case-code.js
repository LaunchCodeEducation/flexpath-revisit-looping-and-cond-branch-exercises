// Exercise 11: filterAndTransform - nested conditionals in a loop
// Drop negatives; square the evens; add 1 to the odds.

function filterAndTransform(numbers) {
  const result = [];
  for (let num of numbers) {
    if (num >= 0) {
      if (num % 2 === 0) {
        result.push(num ** 2);
      } else {
        result.push(num + 1);
      }
    }
  }
  return result;
}

// Testing
const nums = [-3, -2, 0, 1, 2, 3, 4];
console.log(filterAndTransform(nums)); // [0, 2, 4, 4, 16]
