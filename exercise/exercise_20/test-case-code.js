// Exercise 20: CircularCounter - wraps around 0..max using %
// Prefix/postfix behavior works like Exercise 5.

class CircularCounter {
  constructor(max) {
    this.value = 0;
    this.max = max;
  }

  increment(prefix = false) {
    if (prefix) {
      this.value = (this.value + 1) % (this.max + 1);
      return this.value;
    } else {
      const temp = this.value;
      this.value = (this.value + 1) % (this.max + 1);
      return temp;
    }
  }

  decrement(prefix = false) {
    if (prefix) {
      this.value = (this.value - 1 + (this.max + 1)) % (this.max + 1);
      return this.value;
    } else {
      const temp = this.value;
      this.value = (this.value - 1 + (this.max + 1)) % (this.max + 1);
      return temp;
    }
  }
}

// Testing
const counter = new CircularCounter(3);

console.log(counter.increment()); // 0 (value becomes 1)
console.log(counter.increment(true)); // 2
console.log(counter.increment()); // 2 (value becomes 3)
console.log(counter.increment()); // 3 (value becomes 0 - wrapped)
console.log(counter.decrement(true)); // 3 (wrapped back up)
console.log(counter.decrement()); // 3 (value becomes 2)
