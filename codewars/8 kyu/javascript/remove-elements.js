// It uses the filter function to keep only the elements at even indices (0, 2, 4, ...) in the array, effectively removing every second element.

function removeEveryOther(arr){
    // filter creates a new array 
    // `function(elem, index) - defines an anonymous function that takes two parameters (elem and index)
    return arr.filter(function(elem, index) {
      return index % 2 === 0;
    });
  }

// Test Case
var inputArray = ["Keep", "Remove", "Keep", "Remove", "Keep"];
var resultArray = removeEveryOther(inputArray);
console.log(resultArray);  // Output: ["Keep", "Keep", "Keep"]