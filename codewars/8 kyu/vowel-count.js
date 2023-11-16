function getCount(str) {
  
    //   define the vowels
      const vowels = 'aeiou';
      
    //   initialize the count
      let count = 0;
      
    //   loop through each character in the string
      for (let char of str) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      
      return count;
    }


// Test case 1: Basic test with all vowels
const testStr1 = "aeiou";
console.log(getCount(testStr1)); // Expected output: 5

// Test case 2: No vowels in the string
const testStr2 = "xyz";
console.log(getCount(testStr2)); // Expected output: 0