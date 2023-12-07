// 1. Understand the Problem:
// The goal is to replace each letter in the input string with its position in the alphabet.
// Ignore non-letter characters.

// 2. Define the Alphabet Mapping:
// You need a way to map each letter to its corresponding position in the alphabet. For example, 'a' maps to 1, 'b' maps to 2, and so on.

// 3. Iterate Through the String:
// Loop through each character in the input string.

// 4. Check if the Character is a Letter:
// Use a condition to check if the character is a letter.
// If it's a letter, proceed to the next step; otherwise, ignore it.

// 5. Convert Letter to Alphabet Position:
// Convert the letter to its corresponding position in the alphabet using the mapping you defined earlier.

// 6. Build the Result String:
// As you process each letter, build a string that represents the result.

// 7. Handle Spaces or Non-Letter Characters:
// If there are spaces or non-letter characters in the input string, decide how you want to handle them. It seems the example expects you to ignore them.

// 9. Return the Result:
// Return the final string as the output.

// 9. Test Your Solution:
// Use the provided example and maybe a few additional test cases to verify that your solution works correctly.

// 10. Optimization (Optional):
// Once your initial solution is working, consider if there are ways to optimize the code or make it more concise without sacrificing readability.

function alphabetPosition(text) {
    const resultArray = [];
    const alphabetMapping = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
        'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
        't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
    };

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (char >= 'a' && char <= 'z') {
            const position = alphabetMapping[char];
            resultArray.push(position);
        }
    }

    return resultArray.join(' ');
}

// Example usage:
const result = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(result);
