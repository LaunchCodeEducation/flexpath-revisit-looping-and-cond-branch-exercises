// Exercise 13: countFalsyValues
// Falsy values: false, 0, "", null, undefined, NaN. ([] and {} are truthy.)

function countFalsyValues(arr) {
  let count = 0;
  for (let val of arr) {
    if (!Boolean(val)) {
      count++;
    }
  }
  return count;
}

// Testing
const testArray = [0, 1, "", "hello", null, undefined, NaN, false, true, [], {}];
console.log(countFalsyValues(testArray)); // 6
