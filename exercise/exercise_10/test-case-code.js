// Exercise 10: Closure and memory
// The returned function keeps `largeArray` alive through the closure.

function createHeavyClosure() {
  const largeArray = new Array(1e6).fill("*"); // large array in memory
  return function () {
    return largeArray.length;
  };
}

let closureFunc = createHeavyClosure();
console.log(closureFunc()); // 1000000

// largeArray stays in memory while closureFunc references the closure.
// Remove the reference so it can be garbage collected:
closureFunc = null;
