// Exercise 5: Counter with prefix/postfix increment and decrement
// Postfix (default): return the value BEFORE the change.
// Prefix (true): change first, then return the NEW value.

const counter = {
  value: 0,
  increment(prefix = false) {
    if (prefix) {
      this.value += 1;
      return this.value;
    } else {
      const temp = this.value;
      this.value += 1;
      return temp;
    }
  },
  decrement(prefix = false) {
    if (prefix) {
      this.value -= 1;
      return this.value;
    } else {
      const temp = this.value;
      this.value -= 1;
      return temp;
    }
  },
};

// Testing
console.log(counter.increment()); // 0 (postfix)
console.log(counter.value); // 1
console.log(counter.increment(true)); // 2 (prefix)
console.log(counter.value); // 2
console.log(counter.decrement()); // 2 (postfix)
console.log(counter.value); // 1
console.log(counter.decrement(true)); // 0 (prefix)
console.log(counter.value); // 0
