function twoSum(numbers, target) {
    // Outer loop iterates over each element in the array, except the last one
    for (var i = 0; i < numbers.length - 1; i++) {
        // Inner loop starts from the next element after the current outer loop element
        for (var j = i + 1; j < numbers.length; j++) {
            // Check if the sum of the current pair of elements equals the target
            if (numbers[i] + numbers[j] === target) {
                // If so, return the indices of the two numbers in an array
                return [i, j];
            }
        }
    }

    // If no such pair is found, return null or some other indicator
    return null;
}