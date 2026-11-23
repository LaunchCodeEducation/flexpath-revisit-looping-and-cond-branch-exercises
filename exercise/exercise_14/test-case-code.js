// Exercise 14: deepFreeze - recursively freeze an object and
// everything nested inside it

function deepFreeze(obj) {
  Object.freeze(obj);
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      obj[key] !== null &&
      (typeof obj[key] === "object" || typeof obj[key] === "function") &&
      !Object.isFrozen(obj[key])
    ) {
      deepFreeze(obj[key]);
    }
  }
}

const dataStore = {
  number: 42,
  text: "Hello",
  array: [1, 2, 3],
  nested: {
    a: 1,
    b: [2, 3],
    c: { d: 4 },
  },
};

deepFreeze(dataStore);

// Modification attempts - all fail (frozen at every level).
// Wrapped in try/catch because push on a frozen array throws a TypeError.
try {
  dataStore.number = 100;
  dataStore.array.push(4);
  dataStore.nested.c.d = 5;
  dataStore.newProp = "New";
} catch (e) {
  console.log("Modification blocked:", e.message);
}

console.log(dataStore);
// Unchanged: { number: 42, text: 'Hello', array: [1, 2, 3],
//              nested: { a: 1, b: [2, 3], c: { d: 4 } } }
