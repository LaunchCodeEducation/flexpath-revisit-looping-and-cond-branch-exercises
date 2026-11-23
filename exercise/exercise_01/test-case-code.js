// Exercise 1: validateUser - logical && / || conditions
// Valid when: 18+, AND (admin OR pro OR enterprise), AND not banned.

function validateUser(user) {
  if (
    user.age >= 18 &&
    (user.isAdmin === true ||
      user.subscriptionType === "pro" ||
      user.subscriptionType === "enterprise") &&
    user.banned !== true
  ) {
    return true;
  } else {
    return false;
  }
}

// Testing
const user1 = { age: 25, isAdmin: false, subscriptionType: "pro", banned: false };
const user2 = { age: 17, isAdmin: true, subscriptionType: "basic", banned: false };
const user3 = { age: 30, isAdmin: false, subscriptionType: "basic", banned: true };

console.log(validateUser(user1)); // true
console.log(validateUser(user2)); // false (under 18)
console.log(validateUser(user3)); // false (banned, basic)
