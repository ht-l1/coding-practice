
var number = function(array) {
    var result = [];
  
    for (var i = 0; i < array.length; i++) {
      var lineNumber = i + 1;
      result.push(lineNumber + ": " + array[i]);
    }
  
    return result;
  };
  
  // Example usage:
  var input1 = [];
  var output1 = number(input1);
  console.log(output1); // Output: []
  
  var input2 = ["a", "b", "c"];
  var output2 = number(input2);
  console.log(output2);
  // Output: ["1: a", "2: b", "3: c"]  