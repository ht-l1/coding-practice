// Concise Version
// The condition if (len % 2) checks if the length of the string s is odd, not even.

function getMiddle(s)
{
  let len = s.length;
  if (len % 2) {
    // IF odd, take the middle number which is the floor
    return s[(len - 1) / 2];
  } else {
    // ELSE it's even, take the middle two numbers
    return s[len / 2 - 1] + s[len / 2];
  }
}

// Longer Version
// (length / 2) | 0 is a concise way to get the integer division of length by 2, ensuring that you get the floor of the division result. 

function getMiddle(word) {
    const length = word.length;
    const middleIndex = (length / 2) | 0; // Integer division using the bitwise OR operator

    if (length % 2 === 0) {
        // Word length is even, return the middle 2 characters
        return word[middleIndex - 1] + word[middleIndex];
    } else {
        // Word length is odd, return the middle character
        return word[middleIndex];
    }
}

// Examples:
console.log(getMiddle("test"));      // Output: "es"
console.log(getMiddle("testing"));   // Output: "t"
console.log(getMiddle("middle"));    // Output: "dd"
console.log(getMiddle("A"));         // Output: "A"
