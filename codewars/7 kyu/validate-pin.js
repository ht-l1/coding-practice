  // understand the problem
  // (1) PIN can only be either 4 or 6 digits >> length
  // (2) should contain only digits >> all char in the input string (use loop)
  // return true or false  

function validatePIN(pin) {
  // Check if length is valid
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
    
// Check if all characters are digits
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false;
    }
  }

  // If all checks passed, return true
  return true;
}
