// This function initializes a variable total to zero and then iterates through the array, adding each element to the total. Finally, it returns the total, which represents the sum of all the numbers in the array.

function sumArray(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

// Test cases
console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([2, 2, 2, 2])); // 8
console.log(sumArray([50, 50, 1])); // 101
