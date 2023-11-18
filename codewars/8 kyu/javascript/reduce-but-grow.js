// Given a non-empty array of integers, return the result of multiplying the values together in order.
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    // Check if the array is empty
    if (x.length === 0) {
      return undefined; // or any other appropriate value for an empty array
    }
  
    // Initialize a variable to store the product, starting with the first element of the array
    let result = x[0];
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < x.length; i++) {
      // Multiply the current element with the running product
      result *= x[i];
    }
  
    // Return the final result
    return result;
  }
  