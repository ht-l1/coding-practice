function invert(array) {
    const invertedArray = [];
    
    for (let i = 0; i < array.length; i++) {
        invertedArray[i] = -array[i];
    }

    return invertedArray;
}

// Example usage:
console.log(invert([1, 2, 3, 4, 5]));     // Output: [-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5]));   // Output: [-1, 2, -3, 4, -5]
console.log(invert([]));                  // Output: []
