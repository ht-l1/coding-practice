// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).



//   solution

function countSheeps(sheep) {
    // Step 1: Initialize a counter
    let count = 0;
  
    // Step 2: Iterate through the array
    for (let i = 0; i < sheep.length; i++) {
      // Step 3: Check for valid values
      if (sheep[i] !== null && sheep[i] !== undefined) {
        // Step 4: Count the sheep
        if (sheep[i] === true) {
          count++;
        }
      }
      // Continue to the next iteration if the current element is null or undefined
    }
  
    // Step 5: Return the final result
    return count;
  }
  
// solution
function countSheeps(sheep) {
    // Check for an empty array
    if (sheep.length === 0) {
      return 0;
    }
  
    // Initialize a counter
    let count = 0;
  
    // Iterate through the array
    for (let i = 0; i < sheep.length; i++) {
      // Check for valid boolean values (true or false)
    //   This code is handling the situation where sheep[i] is expected to be a boolean value (true or false)
      if (typeof sheep[i] === 'boolean') {
        // increments the count by 1 if sheep[i] is true, and by 0 if sheep[i] is false.
        count += sheep[i] ? 1 : 0;
      }
      // Skip non-boolean values
    }
  
    // Return the result
    return count;
  }
  