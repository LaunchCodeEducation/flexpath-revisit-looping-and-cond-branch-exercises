// Exercise 17: Shallow copy vs deep copy (JSON method)

const original = {
  name: "Alice",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Shallow copy - nested `preferences` object is still shared
const copy = { ...original };

copy.preferences.theme = "light";
console.log(original.preferences.theme); // 'light' - the original changed too!

// Deep copy using JSON methods - fully independent
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.preferences.language = "es";
console.log(original.preferences.language); // 'en' - unchanged
console.log(deepCopy.preferences.language); // 'es'
