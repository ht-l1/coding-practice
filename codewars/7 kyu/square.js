// 1. question - check if your number of building blocks is a perfect square
// 2. understand - A perfect square is an integer that is the square of another integer
// 3. plan a solution - One way to approach this problem is to check if the square root of the given number is an integer.
// 4. pseudocode
// 5. code
// 6. optimizaton

var isSquare = function(n){
    // Check if n is greater than or equal to 0
    if (n < 0) {
        return false;
    }

    // Check if the square root is an integer
    for (var i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }

    return false;
}

// Test Cases
console.log(isSquare(-1));  // false
console.log(isSquare(0));   // true
console.log(isSquare(3));   // false
console.log(isSquare(4));   // true
console.log(isSquare(25));  // true
console.log(isSquare(26));  // false