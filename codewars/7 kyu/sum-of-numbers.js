// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function getSum(a, b) {
    // If a and b are equal, return either one of them
    if (a === b) {
      return a;
    }
  
    // Make sure a is smaller than or equal to b
    // swap will ensure the loop always start with the smaller value
    if (a > b) {
      [a, b] = [b, a]; // Swap values using destructuring assignment
    }
  
    let sum = 0;
  
    // Iterate through all integers from a to b (inclusive)
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  // Example usage:
  const result = getSum(1, 5);
  console.log(result); // Output: 15 (1 + 2 + 3 + 4 + 5)
  