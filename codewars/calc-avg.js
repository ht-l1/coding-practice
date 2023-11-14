function findAverage(array) {
    // Check if the array is empty
    if (array.length === 0) {
        return 0;
    }

    // Calculate the sum of numbers in the array without using reduce
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    // Calculate the average
    const average = sum / array.length;

    return average;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = findAverage(numbers);
console.log(result); // Output: 3