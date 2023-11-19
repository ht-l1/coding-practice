// highAndLow("1 2 3 4 5");  // return "5 1"

function highAndLow(numbers){
    let arr = numbers.split(' ').map(Number);  
    return Math.max(...arr) + ' ' + Math.min(...arr);
  }

// **************knowedge check**************
let numbers = "3 7 1 5 9";
// 1. split(' ') takes the string and splits it into an array with the space seperator
let arrAfterSplit = numbers.split(' ');
console.log(arrAfterSplit); // Output: ['3', '7', '1', '5', '9']
// 2. `map(Number)` converts each string to a number
let arrOfNumbers = arrAfterSplit.map(Number);
console.log(arrOfNumbers);  // Output: [3, 7, 1, 5, 9]
// 3. Math.max(...arr)
// `Math.max` function expects individual arguments, not an array. 
// `...arr` is the spread syntax - it spreads the elements of the array 'arr' as individual arguments to the 'Math.max' function