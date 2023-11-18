function solution(str) {
    // Initialize an empty string to store the reversed result
    var reversedString = '';
  
    // Iterate through the characters of the original string in reverse order
    for (var i = str.length - 1; i >= 0; i--) {
      // Append each character to the reversed string
      reversedString += str[i];
    }
  
    // Return the reversed string
    return reversedString;
  }