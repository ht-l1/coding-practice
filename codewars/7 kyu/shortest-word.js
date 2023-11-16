// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// thought process
// 1. find the length of the shortest word 
// 2. identify individiual words in the string
// Plan
// 1. use the `split' method to convert the input string into an array of words
// 2. iterate though it to find the length of each word
// 3. for each word, calculate its length using the 'length' property


function findShort(s){
    // use the split method to convert the input string into an array of words
    const words = s.split(' ')

    // initialize a variable to keep track of the length of the shortest word
    let shortestLength = Infinity;

    // internate through the array of words
    for (i = 0; i < words.length; i++) {
        // calc the length of the current word
        const currentLength = words[i].length;
        // Update shortestLength if the current word is shorter
        if (currentLength < shortestLength) {
            shortestLength = currentLength;
        }
    }

    return shortestLength;
}

// Example usage:
const result = findShort("The quick brown fox jumped over the lazy dog");
console.log(result); // Output: 3 (the word "fox" is the shortest)