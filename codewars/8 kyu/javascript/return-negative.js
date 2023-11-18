// Return an array, 
// first element - count of positives# 
// second element - sum of negative#

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
        return [];
    }

    let positiveCount = 0;
    let negativeSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveCount++;
        } else if (input[i] < 0) {
            negativeSum += input[i];
        }
    }

    return [positiveCount, negativeSum];
}

// Example usage:
const result = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
console.log(result);  // Output: [10, -65]