// Exercise 16: validateInput - grouped logical conditions
// Valid when: (non-empty string username AND password AND an email
// containing "@") OR the user is a guest.

function validateInput(user) {
  if (
    (typeof user.username === "string" &&
      user.username !== "" &&
      typeof user.password === "string" &&
      user.password !== "" &&
      typeof user.email === "string" &&
      user.email.includes("@")) ||
    user.isGuest === true
  ) {
    return true;
  }
  return false;
}

// Testing
const user1 = { username: "john", password: "secret", email: "john@example.com" };
const user2 = { username: "jane", password: "pass", email: "invalidemail" };
const user3 = { isGuest: true };

console.log(validateInput(user1)); // true
console.log(validateInput(user2)); // false (email has no @)
console.log(validateInput(user3)); // true (guest)
