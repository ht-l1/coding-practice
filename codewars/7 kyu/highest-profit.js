function minMax(arr) {
    // Initialize min and max with the first element of the array
    var max = arr[0], min = arr[0];
  
    // Iterate through the array
    for (var i = 0; i < arr.length; i++) {
      // Update max if the current element is greater
      if (arr[i] > max) max = arr[i];
      
      // Update min if the current element is smaller
      if (arr[i] < min) min = arr[i];
    }
  
    // Return an array containing the minimum and maximum values
    return [min, max];
  }
  
  // Test cases
  console.log(minMax([1, 2, 3, 4, 5]));    // Output: [1, 5]
  console.log(minMax([2334454, 5]));       // Output: [5, 2334454]
  console.log(minMax([1]));                // Output: [1, 1]  