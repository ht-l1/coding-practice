// find the one that appears an odd number of times

// more efficient: using XOR operation
// same value return false. a XOR a = 0
// XOR assignment operator ^=
// ^= is the XOR assignment operator. It takes the current value of result, XORs it with A[i], and assigns the result back to result.
function findOdd(A) {
  
    let result = 0
    
    for (let i = 0; i < A.length; i++) {
      result ^= A[i];
    }
  
    return result;
  }

// inefficient
// count the number of occurance for each number
function countOccurrences(arr, target) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        count++;
      }
    }
  
    return count;
  }