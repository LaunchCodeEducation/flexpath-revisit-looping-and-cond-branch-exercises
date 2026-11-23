// Exercise 2: calculateDiscount - nested ternary operators
// gold 20%, silver 15%, bronze 10%, anything else 0%.

function calculateDiscount(membershipLevel, purchaseAmount) {
  const discount =
    membershipLevel === "gold"
      ? 0.2
      : membershipLevel === "silver"
      ? 0.15
      : membershipLevel === "bronze"
      ? 0.1
      : 0;

  return purchaseAmount * discount;
}

// Testing
console.log(calculateDiscount("gold", 100)); // 20
console.log(calculateDiscount("silver", 200)); // 30
console.log(calculateDiscount("bronze", 150)); // 15
console.log(calculateDiscount("none", 100)); // 0
